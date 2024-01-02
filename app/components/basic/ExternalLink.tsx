import React from "react"
import { CgExternal } from "react-icons/cg"

export default function ExternalLink({ children, href }: {
  children: React.ReactNode,
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="underline overflow-clip flex flex-row gap-1 w-fit"
    >
      {children} <CgExternal />
    </a>
  );
}