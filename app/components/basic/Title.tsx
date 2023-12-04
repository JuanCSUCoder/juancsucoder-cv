import React from "react";

export default function Title({ children, className }: {
	children: React.ReactNode,
	className?: string
}) {
    return (
      <h1 className={"text-4xl" + (className ? " " + className : "")}>
        {children}
      </h1>
    );
}