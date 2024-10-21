"use client";

import Link from "next/link";

// Inside your Layout component
import React from "react";

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
}
