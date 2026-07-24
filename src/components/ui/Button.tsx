import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#df012a] text-white hover:bg-[#b8001f] active:bg-[#9a0019] shadow-sm hover:shadow-md",
    secondary:
      "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
    ghost:
      "bg-transparent text-[#df012a] hover:bg-[#fbeaec] border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs sm:text-sm",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
