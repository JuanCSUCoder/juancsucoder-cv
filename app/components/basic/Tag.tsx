import React from "react";

export default function Tag({ children, textColor, bgColor }: {
  children: React.ReactNode,
  textColor: string,
  bgColor: string
}) {
  return (
    <div className={`pl-1 pr-1 mr-1 bg-${bgColor} rounded text-${textColor}`}>
      {children}
    </div>
  );
}