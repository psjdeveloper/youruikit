import React from "react"

type ButtonProps = {
  variant?: "primary" | "ghost"
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = "primary",
  loading,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        px-4 py-2 rounded-md text-sm font-medium
        transition active:scale-95
        disabled:opacity-50 disabled:pointer-events-none
        ${
          variant === "primary"
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-transparent hover:bg-gray-100"
        }
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}
