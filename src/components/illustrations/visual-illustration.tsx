import { IllustrationFrame } from "./illustration-frame";

export function VisualIllustration() {
  return (
    <IllustrationFrame>
      {(G) => (
        <>
          <circle cx="200" cy="130" r="116" stroke={G} strokeOpacity="0.06" />
          <circle cx="200" cy="130" r="84" stroke={G} strokeOpacity="0.14" strokeDasharray="3 6" />
          <polygon points="200,72 250,101 250,159 200,188 150,159 150,101" fill={G} fillOpacity="0.1" stroke={G} strokeWidth="1.5" />
          <polygon points="200,92 233,111 233,149 200,168 167,149 167,111" stroke={G} strokeOpacity="0.3" />
          <path d="M180 114Q200 100 220 114T220 146Q200 160 180 146" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M180 114 152 92" stroke={G} strokeOpacity="0.4" />
          <circle cx="152" cy="92" r="3.5" stroke={G} fill="var(--color-bg)" />
          <path d="M220 146 262 172" stroke="white" strokeOpacity="0.6" />
          <circle cx="262" cy="172" r="3.5" stroke="white" fill="var(--color-bg)" />
          <rect x="215.5" y="141.5" width="9" height="9" rx="2" fill="white" />
          <circle cx="332" cy="78" r="14" fill={G} fillOpacity="0.7" />
          <circle cx="332" cy="116" r="14" fill={G} fillOpacity="0.35" />
          <circle cx="332" cy="154" r="14" fill={G} fillOpacity="0.14" stroke={G} strokeOpacity="0.3" />
          <rect x="48" y="96" width="64" height="9" rx="4.5" fill={G} fillOpacity="0.45" />
          <rect x="48" y="113" width="44" height="6" rx="3" fill={G} fillOpacity="0.2" />
          <rect x="48" y="125" width="54" height="6" rx="3" fill={G} fillOpacity="0.2" />
          <path d="M48 160Q80 146 112 160" stroke={G} strokeOpacity="0.3" strokeDasharray="2 4" />
          <circle cx="72" cy="206" r="2" fill={G} fillOpacity="0.6" />
          <circle cx="306" cy="214" r="1.5" fill={G} fillOpacity="0.8" />
        </>
      )}
    </IllustrationFrame>
  );
}
