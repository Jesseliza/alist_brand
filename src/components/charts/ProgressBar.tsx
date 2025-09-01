"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { ProgressBarProps } from "@/types/charts";

export default function ProgressBar({
  value,
  color,
  width,
  height = 7,
  backgroundColor = "#F3F3F3",
  cornerRadius = 3.5,
}: ProgressBarProps) {
  const maxValue = 100;
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const drawChart = () => {
      if (!svgRef.current || !containerRef.current) return;

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      // Get the actual width to use - either specified width or container width
      const actualWidth = width || containerRef.current.clientWidth || 100;

      // Calculate the fill width based on percentage
      const fillWidth = (value / maxValue) * actualWidth;

      // Background bar
      svg
        .append("rect")
        .attr("width", actualWidth)
        .attr("height", height)
        .attr("rx", cornerRadius)
        .attr("ry", cornerRadius)
        .attr("fill", backgroundColor);

      // Progress fill
      if (fillWidth > 0) {
        svg
          .append("rect")
          .attr("width", 0)
          .attr("height", height)
          .attr("rx", cornerRadius)
          .attr("ry", cornerRadius)
          .attr("fill", color)
          .transition()
          .duration(300)
          .ease(d3.easeQuadOut)
          .attr("width", fillWidth);
      }
    };

    drawChart();

    // Set up resize observer if no width is specified (responsive mode)
    let resizeObserver: ResizeObserver | null = null;
    if (!width) {
      resizeObserver = new ResizeObserver(() => {
        drawChart();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [value, maxValue, color, width, height, backgroundColor, cornerRadius]);

  return (
    <div ref={containerRef} style={{ width: width || "100%" }}>
      <svg
        ref={svgRef}
        width="100%"
        height={height}
        className="overflow-visible"
      />
    </div>
  );
}
