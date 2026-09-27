import { IllustrationFrame } from "./illustration-frame";

const BARS = [
  { x: 176, height: 30 },
  { x: 212, height: 48 },
  { x: 248, height: 70 },
  { x: 284, height: 104 },
  { x: 320, height: 142 },
];

export function TrafficIllustration() {
  return (
    <IllustrationFrame>
      {(G) => (
        <>
          {[60, 110, 160, 210].map((y) => (
            <path key={y} d={`M30 ${y}H370`} stroke={G} strokeOpacity="0.06" />
          ))}
          <path d="M24 56Q92 70 150 150" stroke={G} strokeOpacity="0.4" strokeDasharray="4 6" />
          <path d="M24 150H150" stroke={G} strokeOpacity="0.4" strokeDasharray="4 6" />
          <path d="M24 236Q92 222 150 150" stroke={G} strokeOpacity="0.4" strokeDasharray="4 6" />
          {BARS.map((bar) => (
            <rect
              key={bar.x}
              x={bar.x}
              y={226 - bar.height}
              width="22"
              height={bar.height}
              rx="6"
              fill={G}
              fillOpacity="0.1"
              stroke={G}
              strokeOpacity="0.22"
            />
          ))}
          <path d="M150 150Q196 150 226 120T300 76T356 44V226H150Z" fill={G} fillOpacity="0.08" />
          <path d="M150 150Q196 150 226 120T300 76T356 44" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="150" cy="150" r="14" stroke={G} strokeOpacity="0.3" />
          <circle cx="150" cy="150" r="6" fill={G} />
          <circle cx="356" cy="44" r="14" stroke="white" strokeOpacity="0.35" />
          <circle cx="356" cy="44" r="5" fill="white" />
        </>
      )}
    </IllustrationFrame>
  );
}
