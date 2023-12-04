import React from "react";

export default function Subtitle({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <h2 className={'text-3xl mb-1' + (className ? ' ' + className : '')}>
            {children}
        </h2>
    )
}