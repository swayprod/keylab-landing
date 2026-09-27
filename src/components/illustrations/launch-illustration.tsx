import { IllustrationFrame } from "./illustration-frame";

export function LaunchIllustration() {
  return (
    <IllustrationFrame>
      {(G) => (
        <>
          <circle cx="244" cy="124" r="118" stroke={G} strokeOpacity="0.06" />
          <path d="M30 232Q190 40 372 58" stroke={G} strokeOpacity="0.16" strokeDasharray="3 7" />
          <path d="M54 214Q136 204 190 150" stroke={G} strokeOpacity="0.55" strokeDasharray="3 7" strokeLinecap="round" />
          <path d="M96 150H146M112 170H158M126 190H168" stroke={G} strokeOpacity="0.2" strokeLinecap="round" />
          <polygon points="314,60 176,124 228,142" fill={G} fillOpacity="0.16" stroke={G} strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="314,60 228,142 246,190" fill={G} fillOpacity="0.38" stroke={G} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M228 142 214 172 246 190" fill={G} fillOpacity="0.1" stroke={G} strokeOpacity="0.6" strokeLinejoin="round" />
          <path d="M338 30l3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" fill="white" />
          <circle cx="84" cy="64" r="2" fill={G} fillOpacity="0.7" />
          <circle cx="358" cy="196" r="2.5" fill={G} fillOpacity="0.5" />
          <circle cx="290" cy="222" r="1.5" fill={G} fillOpacity="0.8" />
        </>
      )}
    </IllustrationFrame>
  );
}
