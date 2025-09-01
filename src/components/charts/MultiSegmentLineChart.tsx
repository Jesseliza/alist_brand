import { MultiSegmentLineChartProps } from "@/types/charts";

export default function MultiSegmentLineChart({
  segments,
  height = 24,
  borderRadius = 12,
  backgroundColor = "#E0E0E0",
}: MultiSegmentLineChartProps) {
  const total = segments.reduce((sum, seg) => sum + seg.value, 0);

  return (
    <div
      style={{
        width: "100%",
        height,
        background: backgroundColor,
        borderRadius,
        overflow: "hidden",
        display: "flex",
      }}
    >
      {segments.map((seg, idx) => (
        <div
          key={idx}
          style={{
            width: `${(seg.value / total) * 100}%`,
            background: seg.color,
            height: "100%",
            borderTopLeftRadius: idx === 0 ? borderRadius : 0,
            borderBottomLeftRadius: idx === 0 ? borderRadius : 0,
            borderTopRightRadius:
              idx === segments.length - 1 ? borderRadius : 0,
            borderBottomRightRadius:
              idx === segments.length - 1 ? borderRadius : 0,
          }}
        />
      ))}
    </div>
  );
}
