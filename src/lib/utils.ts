"use client";

import { useEffect } from "react";

export const logClick = (element: HTMLElement) => {
  console.log('Clicked element:', element);
  console.log('Element tag:', element.tagName);
  console.log('Element classes:', element.className);
  console.log('Element text content:', element.textContent?.trim());
  console.log('Parent element:', element.parentElement);
  console.log('Timestamp:', new Date().toISOString());
};

export const useClickTracking = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement;
      
      while (target && !target.textContent?.trim() && target.children.length > 0) {
        target = target.children[0] as HTMLElement;
      }

      logClick(target);
    };

    document.addEventListener('click', handleClick, true); // Usar fase de captura
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
}; 