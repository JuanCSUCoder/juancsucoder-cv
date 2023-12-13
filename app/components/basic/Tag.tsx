import React from "react";

export default function Tag({ children, className }: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <div className={`pl-1 pr-1 mr-1 rounded ${className}`}>
      {children}
    </div>
  );
}