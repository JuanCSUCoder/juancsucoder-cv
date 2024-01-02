import React from "react";

export default function CardContainer({children}:{children: React.ReactNode}) {
  return <div className="flex flex-row flex-wrap mb-4">{children}</div>;
}