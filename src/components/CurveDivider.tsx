interface CurveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

export default function CurveDivider({
  from = "#023131",
  to = "#d5cfc7",
  flip = false,
}: CurveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "80px", background: to }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <path d="M0,0 L1440,0 L1440,15 Q960,80 0,28 Z" fill={from} />
      </svg>
    </div>
  );
}
