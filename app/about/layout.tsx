import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About PokeTest'
}

export default function AboutLayout({children,}: {children: React.ReactNode}) {
  return (
    <section>
      <nav></nav>
      {children}
    </section>
  )
}