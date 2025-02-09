"use client";

import { useEffect, useState } from "react";

import { X } from "lucide-react";
import { createPortal } from "react-dom";

import type { ModalProps } from "@/types";

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          className="absolute -right-4 -top-4 rounded-full bg-black p-2 shadow-lg transition-transform hover:scale-110 ring-2 ring-white"
          onClick={onClose}
        >
          <X className="h-4 w-4 text-white" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
