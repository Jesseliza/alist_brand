// components/LineChart.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

import { LineChartProps } from "@/types/charts";
import { formatToK } from "@/utils/formatters";

export default function LineChart({
  chartData,
  showXTicks = true,
  showYTicks = true,
  showXAxis = true,
  showYAxis = true,
  axisColor = "#B0B0B0",
  showGridLines = false,
  gridLineStyle = "dotted",
  gridLineColor = "#E9E9E9",
  curveType = "smooth",
  size = 2,
  fontFamily = "Poppins, sans-serif",
  fontSize = "13px",
  fontWeight = 300,
  fontColor = "#606060",
  heightPx = 200,
  yAxisValues,
}: LineChartProps & {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  fontColor?: string;
  heightPx?: number;
  yAxisValues?: (string | number)[];
}) {
  const svgRef = useRef<SVGSVGElement>(null);
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
    if (!svgRef.current || containerWidth < 200) return; // Minimum width check

    const { xAxis: xAxisConfig, yAxis: yAxisConfig, series } = chartData;

    if (!series.length || !xAxisConfig.values.length) return;

    // Validate data alignment
    const maxDataLength = Math.max(...series.map((s) => s.data.length));
    if (maxDataLength !== xAxisConfig.values.length) {
      console.warn(
        `Some series data length (${maxDataLength}) doesn't match xAxis values length (${xAxisConfig.values.length}). ` +
          `Each data point should correspond to one X-axis value.`
      );
    }

    const margin = { top: 10, right: 10, bottom: 30, left: 30 };
    const innerW = containerWidth - margin.left - margin.right;
    const innerH = heightPx - margin.top - margin.bottom;

    // Ensure we have sufficient width
    if (innerW < 100) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg
      .attr("width", containerWidth)
      .attr("height", heightPx)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X scale
    const isNumericX = typeof xAxisConfig.values[0] === "number";

    const xDomain = isNumericX
      ? xAxisConfig.values.map((val: string | number) =>
          typeof val === "string" ? parseFloat(val) : val
        )
      : xAxisConfig.values.map((val: string | number) => val.toString());

    const xScale = isNumericX
      ? (d3
          .scaleLinear()
          .domain(d3.extent(xDomain as number[]) as [number, number])
          .range([0, innerW]) as d3.ScaleLinear<number, number>)
      : (d3
          .scalePoint<string>()
          .domain(xDomain as string[])
          .range([0, innerW])
          .padding(0.5) as d3.ScalePoint<string>);

    // Y scale
    const yAxisValuesToUse = yAxisValues || yAxisConfig.values;
    const yDomain = yAxisValuesToUse
      ? [
          Math.min(
            ...yAxisValuesToUse.map((val: string | number) =>
              typeof val === "string" ? parseFloat(val) : val
            )
          ),
          Math.max(
            ...yAxisValuesToUse.map((val: string | number) =>
              typeof val === "string" ? parseFloat(val) : val
            )
          ),
        ]
      : [0, d3.max(series, (s) => d3.max(s.data))! * 1.1];

    const yScale = d3.scaleLinear().domain(yDomain).range([innerH, 0]);

    // X-axis
    const xAxis = isNumericX
      ? d3.axisBottom(xScale as d3.AxisScale<number>)
      : d3.axisBottom(xScale as d3.AxisScale<string>);

    xAxis.tickSizeInner(6).tickSizeOuter(0);

    // Since we set the scale domain based on axis values, default ticks should work
    // Only override ticks if we need custom positioning

    const xAxisG = g
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${innerH})`);

    xAxisG.call(showXTicks ? xAxis : xAxis.tickSizeInner(0));
    if (axisColor) {
      xAxisG.selectAll("text").attr("fill", axisColor);
      xAxisG.selectAll("path, line").attr("stroke", axisColor);
    }
    // Hide the axis line if showXAxis is false
    if (!showXAxis) {
      xAxisG.selectAll(".domain").attr("display", "none");
    }

    // Y-axis
    const yTicks = yAxisValuesToUse
      ? yAxisValuesToUse.map((val: string | number) =>
          typeof val === "string" ? parseFloat(val) : val
        )
      : yScale.ticks();

    const yAxis = d3.axisLeft(yScale).tickSizeInner(6).tickSizeOuter(0);

    // If yAxisValues or yAxisConfig.values provided, use those specific values as ticks
    if (yAxisValuesToUse) {
      yAxis.tickValues(yTicks);
    }

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
    // Format Y-axis labels to show K notation
    yAxisG.selectAll("text").text((d) => {
      return formatToK(d as number);
    });

    // Add horizontal grid lines if enabled
    if (showGridLines) {
      g.selectAll("line.grid-line")
        .data(yTicks)
        .join("line")
        .attr("class", "grid-line")
        .attr("x1", 0)
        .attr("x2", innerW)
        .attr("y1", (d) => yScale(d as number))
        .attr("y2", (d) => yScale(d as number))
        .attr("stroke", gridLineColor)
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", gridLineStyle === "dotted" ? "2,2" : "none")
        .attr("opacity", 0.6);
    }

    // Get curve function based on curve type
    const getCurveFunction = () => {
      switch (curveType) {
        case "linear":
          return d3.curveLinear;
        case "step":
          return d3.curveStepAfter;
        case "smooth":
        default:
          return d3.curveMonotoneX;
      }
    };

    // Line generator
    const lineGen = d3
      .line<number>()
      .x((d, i) => {
        // Position data points based on their index in xAxisValues
        const xValue = xAxisConfig.values[i];
        if (xValue === undefined) {
          console.warn(`No xAxisValue found for data point at index ${i}`);
          return 0; // fallback to start of chart
        }
        return isNumericX
          ? (xScale as d3.ScaleLinear<number, number>)(
              typeof xValue === "string" ? parseFloat(xValue) : xValue
            )
          : (xScale as d3.ScalePoint<string>)(xValue.toString())!;
      })
      .y((d) => yScale(d))
      .curve(getCurveFunction());

    // Draw each line
    series.forEach((seriesData) => {
      g.append("path")
        .datum(seriesData.data)
        .attr("d", lineGen!)
        .attr("fill", "none")
        .attr("stroke", seriesData.color)
        .attr("stroke-width", size);
    });

    // 5) Raise axes above overlays
    // Note: legend/key labels have been removed. Add your own legend externally.
    // After rendering axes, set text font styles and fill color
    svg
      .selectAll("text")
      .attr("fill", fontColor)
      .attr("font-family", fontFamily)
      .attr("font-size", fontSize)
      .attr("font-weight", fontWeight);
  }, [
    chartData,
    containerWidth,
    heightPx,
    showXTicks,
    showYTicks,
    showXAxis,
    showYAxis,
    axisColor,
    showGridLines,
    gridLineStyle,
    gridLineColor,
    curveType,
    size,
    fontFamily,
    fontSize,
    fontWeight,
    fontColor,
    yAxisValues,
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
    </div>
  );
}
