interface ClickableProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Clickable({ children, className, href }: ClickableProps) {
  const Component = href ? "a" : "div";
  return (
    <Component
      className={`${className || ""}`}
      href={href}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        console.log("Clicked element:", target);
        console.log("Element tag:", target.tagName);
        console.log("Element text content:", target.textContent?.trim());
        console.log("Timestamp:", new Date().toISOString());
      }}
    >
      {children}
    </Component>
  );
}
