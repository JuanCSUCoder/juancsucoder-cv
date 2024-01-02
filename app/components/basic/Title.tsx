import React from "react";

export default function Title({ children, className, id }: {
	children: React.ReactNode,
  className?: string,
  id?: string,
}) {
    return (
      <h1 id={id} className={"text-4xl mb-2" + (className ? " " + className : "")}>
        {children}
      </h1>
    );
}