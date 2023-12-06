import React from "react";

export default function TitledElement({ children, title, href }: {
    children: React.ReactNode,
    title: string,
    href: string
}) {
    return (
      <li>
        {title}: <a target='_blank' href={href}>{ children }</a>
      </li>
    );
}