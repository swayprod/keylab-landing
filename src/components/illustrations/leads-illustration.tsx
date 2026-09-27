import { IllustrationFrame } from "./illustration-frame";

const NODES = [
  { x: 78, y: 106 },
  { x: 300, y: 85 },
  { x: 322, y: 154 },
  { x: 200, y: 200 },
];

export function LeadsIllustration() {
  return (
    <IllustrationFrame>
      {(G) => (
        <>
          <ellipse cx="200" cy="130" rx="172" ry="102" stroke={G} strokeOpacity="0.06" />
          <ellipse cx="200" cy="130" rx="130" ry="70" stroke={G} strokeOpacity="0.2" strokeDasharray="3 6" />
          {NODES.map((node) => (
            <g key={`${node.x}-${node.y}`}>
              <path d={`M200 130L${node.x} ${node.y}`} stroke={G} strokeOpacity="0.25" />
              <circle cx={node.x} cy={node.y} r="11" fill={G} fillOpacity="0.14" stroke={G} strokeOpacity="0.7" />
              <circle cx={node.x} cy={node.y} r="3" fill={G} />
            </g>
          ))}
          <circle cx="200" cy="130" r="40" fill={G} fillOpacity="0.1" stroke={G} strokeWidth="1.5" />
          <circle cx="200" cy="130" r="26" fill={G} fillOpacity="0.2" />
          <path d="M189 131l8 8 16-18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M66 30h60a10 10 0 0 1 10 10v20a10 10 0 0 1-10 10H92l-14 10V70h-12a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10Z"
            fill={G}
            fillOpacity="0.1"
            stroke={G}
            strokeOpacity="0.55"
          />
          <rect x="70" y="42" width="44" height="5" rx="2.5" fill={G} fillOpacity="0.5" />
          <rect x="70" y="53" width="30" height="5" rx="2.5" fill={G} fillOpacity="0.25" />
          <circle cx="352" cy="44" r="2" fill={G} fillOpacity="0.7" />
          <circle cx="44" cy="214" r="1.5" fill={G} fillOpacity="0.8" />
        </>
      )}
    </IllustrationFrame>
  );
}
