import React from "react";

export default function StacksGrid({children}:{children: React.ReactNode}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      {children}
    </div>
  )
}