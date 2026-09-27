import { IllustrationFrame } from "./illustration-frame";

export function SiteIllustration() {
  return (
    <IllustrationFrame>
      {(G) => (
        <>
          <circle cx="200" cy="130" r="122" stroke={G} strokeOpacity="0.1" strokeDasharray="2 6" />
          <rect x="112" y="36" width="220" height="150" rx="16" stroke={G} strokeOpacity="0.08" fill={G} fillOpacity="0.03" />
          <rect x="98" y="50" width="226" height="150" rx="16" stroke={G} strokeOpacity="0.16" fill={G} fillOpacity="0.04" />
          <rect
            x="84"
            y="64"
            width="232"
            height="152"
            rx="16"
            stroke={G}
            strokeOpacity="0.8"
            strokeWidth="1.2"
            fill={G}
            fillOpacity="0.08"
          />
          <path d="M84 90H316" stroke={G} strokeOpacity="0.35" />
          <circle cx="100" cy="77" r="3" fill={G} fillOpacity="0.7" />
          <circle cx="112" cy="77" r="3" fill={G} fillOpacity="0.45" />
          <circle cx="124" cy="77" r="3" fill={G} fillOpacity="0.25" />
          <rect x="104" y="108" width="112" height="10" rx="5" fill={G} fillOpacity="0.55" />
          <rect x="104" y="126" width="82" height="6" rx="3" fill={G} fillOpacity="0.22" />
          <rect x="104" y="138" width="96" height="6" rx="3" fill={G} fillOpacity="0.22" />
          <path d="M232 190Q252 180 262 156T300 112V196H232Z" fill={G} fillOpacity="0.12" />
          <path d="M232 190Q252 180 262 156T300 112" stroke={G} strokeWidth="2" strokeLinecap="round" />
          <rect x="104" y="160" width="76" height="24" rx="12" fill={G} fillOpacity="0.65" />
          <circle cx="172" cy="176" r="18" stroke="white" strokeOpacity="0.18" />
          <circle cx="172" cy="176" r="10" stroke="white" strokeOpacity="0.45" />
          <path d="M170 172v24l6-6 8 12 5-3-8-12h9z" fill="white" />
          <circle cx="58" cy="72" r="2" fill={G} fillOpacity="0.6" />
          <circle cx="344" cy="206" r="2.5" fill={G} fillOpacity="0.6" />
          <circle cx="352" cy="58" r="1.5" fill={G} fillOpacity="0.8" />
        </>
      )}
    </IllustrationFrame>
  );
}
