import { ChartProps } from "@/types/common";

// BarChart types
export interface BarChartProps extends ChartProps {
  barInnerGapPx?: number;
  barWidthPx?: number;
  barRadius?: number;
  heightPx?: number;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  fontColor?: string;
}

// LineChart types
export interface LineChartProps {
  chartData: ChartData;
  showXTicks?: boolean;
  showYTicks?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  axisColor?: string;
  showGridLines?: boolean;
  gridLineStyle?: "dotted" | "solid";
  gridLineColor?: string;
  curveType?: "linear" | "step" | "smooth";
  size?: number;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  fontColor?: string;
  heightPx?: number;
  yAxisValues?: (string | number)[];
}

export type ChartData = {
  xAxis: {
    values: (string | number)[];
  };
  yAxis: {
    values: number[];
  };
  series: ChartSeries[];
};

export type ChartSeries = {
  data: number[];
  color: string;
};

// MultiSegmentLineChart types
export type MultiSegment = {
  value: number;
  color: string;
};

export type MultiSegmentLineChartProps = {
  segments: MultiSegment[];
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
};

// ProgressBar types
export type ProgressBarProps = {
  value: number;
  color: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  cornerRadius?: number;
};

// RingChart types
export type DonutSegment = {
  /** Percentage of the whole (should sum to ≤100) */
  value: number;
  /** Stroke color for this slice */
  color: string;
};

export type DonutChartProps = {
  /** Array of segments summing to ≤100% */
  segments: DonutSegment[];
  /** Maximum diameter (px or any CSS unit) */
  size?: number | string;
  /** Thickness of the ring (px) */
  thickness?: number;
  /** Gap between segments, in degrees */
  gap?: number;
  /** End-cap style: "butt" | "round" | "square" */
  cap?: "butt" | "round" | "square";
  /** Color for the empty part of the ring */
  backgroundColor?: string;
  /** Optional center content */
  children?: React.ReactNode;
};
