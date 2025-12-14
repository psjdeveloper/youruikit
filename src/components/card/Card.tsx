import * as React from "react"
import clsx from "clsx"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-200 bg-white p-4 shadow-sm",
        className
      )}
      {...props}
    />
  )
}
