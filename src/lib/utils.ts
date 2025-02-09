"use client";

export const logClick = (element: HTMLElement) => {
  console.log('Clicked element:', element);
  console.log('Element tag:', element.tagName);
  console.log('Element classes:', element.className);
  console.log('Timestamp:', new Date().toISOString());
};