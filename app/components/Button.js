'use client';
import React from 'react'

export default function Button() {
  return (
    <button
        onClick={() => console.log("i have clicked")}
        className="p-2 rounded-sm mt-10 bg-green-600 "
    >
        Click hear
    </button>
  )
}
