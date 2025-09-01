import { DonutChartProps } from "@/types/charts";

export default function DonutChart({
  segments,
  size = "100%", // default: fill parent
  thickness = 20,
  gap = 2,
  cap = "round",
  backgroundColor = "transparent",
  children,
}: DonutChartProps) {
  // sanity‐check total
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  if (total > 100.01) {
    console.warn(`DonutChart: segment values sum to ${total} (>100).`);
  }

  // fixed coordinate system in viewBox (200×200)
  const VB = 200;
  const center = VB / 2;
  const radius = center - thickness / 2;

  // gap math
  const gapRad = (gap * Math.PI) / 180;
  const twoPi = Math.PI * 2;
  const effectiveCircle = twoPi - segments.length * gapRad;

  // build arcs
  let cumulative = 0;
  const arcs = segments.map((seg) => {
    const sweep = (seg.value / 100) * effectiveCircle;
    const start = cumulative;
    const end = cumulative + sweep;
    cumulative = end + gapRad;
    return { start, end, color: seg.color };
  });

  // describe one arc
  function describeArc(
    x: number,
    y: number,
    r: number,
    a0: number,
    a1: number
  ) {
    const x0 = x + r * Math.cos(a0);
    const y0 = y + r * Math.sin(a0);
    const x1 = x + r * Math.cos(a1);
    const y1 = y + r * Math.sin(a1);
    const largeArc = a1 - a0 > Math.PI ? 1 : 0;
    return `M ${x0} ${y0} A ${r} ${r} 0 ${largeArc} 1 ${x1} ${y1}`;
  }

  return (
    <div
      className="w-full aspect-square relative"
      style={
        typeof size === "number"
          ? { maxWidth: `${size}px` }
          : { maxWidth: size }
      }
    >
      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* background ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={thickness}
          strokeLinecap={cap}
        />

        {/* segments drawn in reverse order so segments[0] appears on top */}
        {[...arcs].reverse().map((arc, i) => {
          const sa = arc.start - Math.PI / 2;
          const ea = arc.end - Math.PI / 2;
          return (
            <path
              key={i}
              d={describeArc(center, center, radius, sa, ea)}
              fill="none"
              stroke={arc.color}
              strokeWidth={thickness}
              strokeLinecap={cap}
            />
          );
        })}
      </svg>

      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
