export type BarValue = {
  value: number;
  color: string;
};

export type GenericChartData = {
  [key: string]: string | BarValue;
};

export interface ChartProps {
  data: GenericChartData[];
  xAxisKey: string; // The key to use for X-axis labels (e.g., "day", "month", "category")
  barKeys: string[]; // Array of keys to render as bars (e.g., ["active", "completed"] or ["revenue"])
  maxBarWidth: number; // Maximum width of individual bars
  showXTicks?: boolean;
  showYTicks?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  axisColor?: string;
  yAxisValues: string[] | number[];
  showGridLines?: boolean;
  gridLineStyle?: "solid" | "dotted";
  gridLineColor?: string;
  barSpacing?: number;
}

export type ChartSeries = {
  /** Name/label for this data series */
  name: string;
  /** Color for this line */
  color: string;
  /** Data values corresponding to xAxisValues */
  data: number[];
};

export type ChartData = {
  /** X-axis configuration */
  xAxis: {
    /** Values to display on X-axis */
    values: string[] | number[];
    /** Optional label for X-axis */
    label?: string;
  };
  /** Y-axis configuration */
  yAxis: {
    /** Optional specific values to display on Y-axis */
    values?: string[] | number[];
    /** Optional label for Y-axis */
    label?: string;
  };
  /** Data series to plot */
  series: ChartSeries[];
};

export type LineChartProps = {
  /** Complete chart data object */
  chartData: ChartData;
  /** Show X-axis tick marks */
  showXTicks?: boolean;
  /** Show Y-axis tick marks */
  showYTicks?: boolean;
  /** Show X-axis line */
  showXAxis?: boolean;
  /** Show Y-axis line */
  showYAxis?: boolean;
  /** Color for axis lines and text */
  axisColor?: string;
  /** Show horizontal grid lines */
  showGridLines?: boolean;
  /** Grid line style */
  gridLineStyle?: "solid" | "dotted";
  /** Grid line color */
  gridLineColor?: string;
  /** Line curve type */
  curveType?: "linear" | "smooth" | "step";
  /** Line stroke width in pixels */
  size?: number;
};

export type IconProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type InputFieldProps = {
  label: string;
  value: string;
  name: string;
  icon?: IconProps;
};

export type Option = {
  value: string;
  label: string;
};
