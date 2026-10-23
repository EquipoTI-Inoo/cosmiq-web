"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: { question: string; answer: string }[];
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
              isOpen ? "border-blue-300 bg-blue-50/50" : "border-slate-200 bg-white hover:border-blue-200"
            }`}
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                {item.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-[#2462E8] text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
