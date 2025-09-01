// components/BarChart.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

import { BarChartProps } from "@/types/charts";
import { BarValue } from "@/types/common";

export default function BarChart({
  data,
  xAxisKey,
  barKeys,
  maxBarWidth,
  showXTicks = true,
  showYTicks = true,
  showXAxis = true,
  showYAxis = true,
  axisColor = "#B0B0B0",
  yAxisValues,
  showGridLines = false,
  gridLineStyle = "dotted",
  gridLineColor = "#E9E9E9",
  barInnerGapPx = 8,
  barWidthPx = 20,
  barRadius = 4,
  heightPx = 200,
  fontFamily = "Poppins, sans-serif",
  fontSize = "13px",
  fontWeight = 300,
  fontColor = "#606060",
}: BarChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0); // Start with 0, wait for measurement

  // Remove aspect ratio logic, use fixed height
  // const ASPECT_RATIO = 590 / 260;
  // const calculatedHeight = containerWidth / ASPECT_RATIO;

  // Measure container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width > 0) {
          // Only update if we have a valid width
          setContainerWidth(width);
        }
      }
    };

    // Delay initial measurement to ensure container is rendered
    const timer = setTimeout(updateWidth, 10);

    // Listen for resize events
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateWidth, 10); // Small delay to ensure accurate measurement
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current || !tooltipRef.current || containerWidth < 200) return; // Minimum width check
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 10, right: 10, bottom: 30, left: 20 };
    const innerW = containerWidth - margin.left - margin.right;
    const innerH = heightPx - margin.top - margin.bottom;

    // Ensure we have sufficient width
    if (innerW < 100) return;

    // Scales
    const x0 = d3
      .scaleBand<string>()
      .domain(data.map((d) => d[xAxisKey] as string))
      .rangeRound([0, innerW])
      .paddingInner(0.1) // Reduced padding for more space
      .paddingOuter(0.05);

    // Declare groupWidth and numBars only once
    const groupWidth = x0.bandwidth();
    const numBars = barKeys.length;
    const gapPx = barInnerGapPx;
    let barWidth =
      numBars > 0 ? (groupWidth - gapPx * (numBars - 1)) / numBars : 0;
    let startX = 0;
    if (barWidthPx && numBars > 0) {
      const totalBarWidth = numBars * barWidthPx + (numBars - 1) * gapPx;
      barWidth = Math.min(barWidthPx, groupWidth); // Clamp to groupWidth if needed
      startX = (groupWidth - totalBarWidth) / 2;
    }

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) =>
          Math.max(...barKeys.map((key) => (d[key] as BarValue).value))
        )! * 1.1,
      ])
      .nice()
      .range([innerH, 0]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Tick values
    const yTicks = yAxisValues.map((val) =>
      typeof val === "string" ? parseFloat(val) : val
    );
    const xTicks = data.map((d) => d[xAxisKey] as string);

    // Y-axis with only inner ticks
    // 2) Build your axis with only those values, inner ticks 6px long, no outer caps
    const yAxis = d3
      .axisLeft(y)
      .tickValues(yTicks)
      .tickSizeInner(6) // length of each inner tick
      .tickSizeOuter(0); // remove end‐cap ticks

    // 3) Render it
    const yAxisG = g.append("g").attr("class", "y-axis");

    yAxisG.call(showYTicks ? yAxis : yAxis.tickSizeInner(0));
    if (axisColor) {
      yAxisG.selectAll("text").attr("fill", axisColor);
      yAxisG.selectAll("path, line").attr("stroke", axisColor);
    }
    // Hide the axis line if showYAxis is false
    if (!showYAxis) {
      yAxisG.selectAll(".domain").attr("display", "none");
    }

    // X-axis with only inner ticks
    const xAxis = d3
      .axisBottom(x0)
      .tickValues(xTicks)
      .tickSizeInner(6) // length of inner ticks
      .tickSizeOuter(0); // remove outer end-ticks

    const xAxisG = g
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${innerH})`);

    xAxisG.call(showXTicks ? xAxis : xAxis.tickSizeInner(0));
    if (axisColor) {
      xAxisG.selectAll("text").attr("fill", axisColor);
      xAxisG.selectAll("path, line").attr("stroke", axisColor);
    }
    // Move x-axis labels down by 10px
    xAxisG.selectAll("text").attr("dy", "10px");
    // Hide the axis line if showXAxis is false
    if (!showXAxis) {
      xAxisG.selectAll(".domain").attr("display", "none");
    }

    // Add horizontal grid lines if enabled
    if (showGridLines) {
      g.selectAll("line.grid-line")
        .data(yTicks)
        .join("line")
        .attr("class", "grid-line")
        .attr("x1", 0)
        .attr("x2", innerW)
        .attr("y1", (d) => y(d))
        .attr("y2", (d) => y(d))
        .attr("stroke", gridLineColor)
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", gridLineStyle === "dotted" ? "2,2" : "none")
        .attr("opacity", 0.6);
    }

    // 2) DAY GROUPS
    const dayGroups = g
      .selectAll("g.day")
      .data(data)
      .join("g")
      .attr("class", "day")
      .attr("transform", (d) => `translate(${x0(d[xAxisKey] as string)},0)`);

    // 3) OVERLAYS
    dayGroups
      .append("rect")
      .attr("class", "day-overlay")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", x0.bandwidth())
      .attr("height", innerH)
      .attr("fill", "transparent")
      .style("cursor", "pointer")
      .on("mouseenter", (event, d) => {
        d3.select(event.currentTarget).attr("fill", "#eee");
        const tooltipContent = [
          `<strong>${d[xAxisKey]}</strong>`,
          ...barKeys.map((key) => `${key}: ${(d[key] as BarValue).value}`),
        ].join("<br/>");

        tooltip
          .style("display", "block")
          .style("left", event.offsetX + margin.left + "px")
          .style("top", event.offsetY + "px")
          .html(tooltipContent);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", event.offsetX + margin.left + "px")
          .style("top", event.offsetY + "px");
      })
      .on("mouseleave", (event) => {
        tooltip.style("display", "none");
        d3.select(event.currentTarget).attr("fill", "transparent");
      });

    // 4) BARS on top using <rect> with rounded top corners
    dayGroups
      .selectAll("path.bar")
      .data((d) =>
        barKeys.map((key, i) => {
          const value = (d[key] as BarValue).value;
          const color = (d[key] as BarValue).color;
          const x =
            (barWidthPx && numBars > 0 ? startX : 0) + i * (barWidth + gapPx);
          const width = barWidth;
          const y0 = y(value);
          const y1 = innerH;
          const r = Math.min(barRadius, width / 2, y1 - y0); // Clamp radius
          // Path for rect with only top corners rounded
          const path = [
            `M${x},${y1}`,
            `L${x},${y0 + r}`,
            `Q${x},${y0} ${x + r},${y0}`,
            `L${x + width - r},${y0}`,
            `Q${x + width},${y0} ${x + width},${y0 + r}`,
            `L${x + width},${y1}`,
            `Z`,
          ].join(" ");
          return {
            key,
            value,
            color,
            path,
          };
        })
      )
      .join("path")
      .attr("class", "bar")
      .attr("d", (d) => d.path)
      .attr("fill", (d) => d.color)
      .attr("pointer-events", "none");

    // 5) Raise axes above overlays
    yAxisG.raise();
    xAxisG.raise();

    // Note: legend/key labels have been removed. Add your own legend externally.
    // After rendering axes, set text font styles and fill color
    svg
      .selectAll("text")
      .attr("fill", fontColor)
      .attr("font-family", fontFamily)
      .attr("font-size", fontSize)
      .attr("font-weight", fontWeight);
  }, [
    data,
    xAxisKey,
    barKeys,
    maxBarWidth,
    containerWidth,
    heightPx,
    showXTicks,
    showYTicks,
    showXAxis,
    showYAxis,
    axisColor,
    yAxisValues,
    showGridLines,
    gridLineStyle,
    gridLineColor,
    barInnerGapPx,
    barWidthPx,
    barRadius,
    fontFamily,
    fontSize,
    fontWeight,
    fontColor,
  ]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <svg
        ref={svgRef}
        width={containerWidth}
        height={heightPx}
        className="[&_text]:fill-current block max-w-full"
        style={{
          fontFamily,
          fontSize,
          fontWeight,
          color: fontColor,
        }}
      />
      <div
        ref={tooltipRef}
        className="pointer-events-none absolute z-10 rounded bg-white p-2 text-xs shadow-lg"
        style={{ display: "none" }}
      />
    </div>
  );
}
