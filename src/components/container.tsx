"use client";

import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#8B8B8B] font-terminal">
      <div className="h-screen max-h-screen min-h-screen p-4 fixed inset-0 flex flex-col gap-2">
        <div className="border border-[#1E1E1E] p-4 shrink-0 bg-[#111111] backdrop-blur-sm" />
        <div className="border border-[#1E1E1E] flex-1 min-h-0 bg-[#111111] backdrop-blur-sm">
          <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-track-[#111111] scrollbar-thumb-[#1E1E1E]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
