import React from "react";

export default function CardContainer({ children, className }:
  {
    children: React.ReactNode,
    className?: string
  }) {
  return <div className={`flex flex-row flex-wrap mb-4 ${className}`}>{children}</div>;
}