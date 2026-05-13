import * as React from "react";

type Variant = "gradient" | "secondary" | "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  gradient:
    "bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white hover:opacity-90",
  secondary:
    "bg-[#E4E7ED] text-[#040926] hover:bg-[#E4E7ED]/80",
  primary: "bg-[#040926] text-white hover:bg-[#040926]/90",
  ghost: "hover:bg-[#E4E7ED]/50 text-[#040926]",
  outline:
    "border border-white/20 hover:border-white/40 text-white bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 py-1 rounded-[4px] text-sm",
  md: "h-12 px-6 rounded-[6px] text-base",
  lg: "h-14 px-8 rounded-[8px] text-lg",
  xl: "h-16 px-9 rounded-[8px] text-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
