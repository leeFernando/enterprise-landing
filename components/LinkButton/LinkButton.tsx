import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-md",
    "text-center",
    "text-sm",
    "border",
    "border-blue-600",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-blue-600", "text-white", "hover:enabled:bg-blue-700"],
        secondary: ["bg-transparent", "text-blue-600", "hover:enabled:bg-blue-600", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "py-3", "px-7"],
        lg: ["min-w-32", "h-full", "min-h-12", "py-4", "px-9"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href: string
}

export function LinkButton({ className, intent, size, underline, ...props }: LinkButtonProps) {
  return (
    <a className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </a>
  )
}
