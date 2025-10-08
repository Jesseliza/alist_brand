"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClasses =
    "px-6 py-2 text-sm font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 disabled:bg-gray-400",
    secondary:
      "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}