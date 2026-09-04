import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "burgundy";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-espresso text-[#FFF9EE] hover:bg-espresso-600 shadow-sm hover:shadow-md",
      secondary:
        "bg-canvas-alt text-espresso hover:bg-canvas-subtle border border-espresso/10",
      outline:
        "border-2 border-espresso text-espresso hover:bg-espresso hover:text-[#FFF9EE]",
      ghost:
        "text-espresso hover:bg-espresso/5",
      gold:
        "bg-caramel text-roast hover:bg-caramel-400 font-semibold shadow-sm hover:shadow-md",
      burgundy:
        "bg-terracotta text-[#FFF9EE] hover:bg-terracotta-700 shadow-sm hover:shadow-md",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wide uppercase rounded-full",
      md: "h-11 px-6 text-sm tracking-wide rounded-full",
      lg: "h-13 px-8 text-base tracking-wide rounded-full font-semibold",
      icon: "h-10 w-10 rounded-full p-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <span>Processing...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
