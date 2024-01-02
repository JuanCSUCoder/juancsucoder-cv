import React from "react";

export default function Subtitle({ children, className, id }: {
    children: React.ReactNode,
    className?: string,
    id?: string,
}) {
    return (
        <h2 id={id} className={'text-3xl mb-1' + (className ? ' ' + className : '')}>
            {children}
        </h2>
    )
}