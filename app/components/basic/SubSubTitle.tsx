import React from "react";

export default function SubSubTitle({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
      <h3 className={"text-2xl mb-1" + (className ? " " + className : "")}>
        {children}
      </h3>
    );
}