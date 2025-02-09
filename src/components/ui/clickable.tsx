interface ClickableProps {
  children: React.ReactNode;
  className?: string;
}

export function Clickable({ children, className }: ClickableProps) {
  return (
    <div
      className={`cursor-pointer ${className || ""}`}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        console.log("Clicked element:", target);
        console.log("Element tag:", target.tagName);
        console.log("Element text content:", target.textContent?.trim());
        console.log("Timestamp:", new Date().toISOString());
      }}
    >
      {children}
    </div>
  );
}
