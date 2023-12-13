import React from "react"

export default function ExternalLink({ children, href }: {
  children: React.ReactNode,
  href: string
}) {
  return (
    <a href={href} target="_blank" className="underline">{children}</a>
  )
}