interface IconProps {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}

function strokeProps({ size = 24, stroke = "currentColor", strokeWidth = 1.8 }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
}

export function RotateIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 4v5h-5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps({ strokeWidth: 2.6, ...props })}>
      <path d="M5 12l5 5L20 6" />
    </svg>
  );
}

export function CrossIcon(props: IconProps) {
  return (
    <svg {...strokeProps({ strokeWidth: 3, ...props })}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function FeatherIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M20.2 12.2a6 6 0 0 0-8.5-8.5L5 10.5V19h8.5z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M12 3c1.8 2.6 3.6 4 3.6 6.8a3.6 3.6 0 0 1-7.2 0c0-1.2.6-2.2 1.3-3 .5 1 1.3 1.4 2 1.4-.6-1.6-.3-3.4.3-5.2Z" />
    </svg>
  );
}

export function GrillFlameIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M12 3c1.8 2.6 3.6 4 3.6 6.8a3.6 3.6 0 0 1-7.2 0c0-1.2.6-2.2 1.3-3 .5 1 1.3 1.4 2 1.4-.6-1.6-.3-3.4.3-5.2Z" />
      <path d="M4 20l16-3" />
      <path d="M4 17l16 3" />
    </svg>
  );
}

export function SadFaceIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 15.5s1.2-1.5 3.5-1.5 3.5 1.5 3.5 1.5" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </svg>
  );
}

export function FoldIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M12 5v14" />
      <path d="M15.5 9.5l3 2.5-3 2.5" />
    </svg>
  );
}

export function CompactIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M4 14h6v6" />
      <path d="M20 10h-6V4" />
      <path d="M14 10l7-7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

export function SkewersIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M2 12h20" />
      <circle cx="8" cy="12" r="2.1" />
      <circle cx="13" cy="12" r="2.1" />
      <circle cx="18" cy="12" r="2.1" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M12 2 20 6v5c0 5-3.5 9-8 11-4.5-2-8-6-8-11V6Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function TimerIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13V9" />
      <path d="M9 2h6" />
    </svg>
  );
}

export function DropIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...strokeProps({ strokeWidth: 2.4, ...props })}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function QuoteIcon({ size = 48, fill = "#3C7A47" }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={{ opacity: 0.45 }}>
      <path d="M7 7h5v6c0 3-2 5-5 6v-2c2-1 3-2 3-4H7zm9 0h5v6c0 3-2 5-5 6v-2c2-1 3-2 3-4h-3z" />
    </svg>
  );
}

export function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 3c.3 2.2 1.7 3.8 3.9 4v2.7c-1.4 0-2.7-.4-3.9-1.1v5.6a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.8a2.6 2.6 0 1 0 1.8 2.5V3H16Z" />
    </svg>
  );
}
