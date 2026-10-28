interface EyebrowProps {
  children: React.ReactNode;
  tone?: "clay" | "brass" | "sage" | "alert";
  className?: string;
}

const TONES = {
  clay: "text-clay",
  brass: "text-brass",
  sage: "text-sage",
  alert: "text-alert",
} as const;

export function Eyebrow({ children, tone = "clay", className = "" }: EyebrowProps) {
  return (
    <p className={`eyebrow ${TONES[tone]} ${className}`}>
      <span aria-hidden className="inline-block h-[1px] w-7 bg-current opacity-60" />
      {children}
    </p>
  );
}
