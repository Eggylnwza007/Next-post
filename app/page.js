'use client'
import React from "react";
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      Hello World 
      <div>
        <Link href="/user/"> User </Link> 
      </div>
    </div>
  );
}
