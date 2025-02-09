import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import { CardImage } from "./card-image";

describe("CardImage", () => {
  const mockProps = {
    alt: "Test image",
    src: "/test-image.jpg",
    onImageClick: jest.fn(),
  };

  it("renders image with correct props", () => {
    render(<CardImage {...mockProps} />);
    const image = screen.getByAltText(mockProps.alt);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  it("calls onImageClick when clicked", () => {
    render(<CardImage {...mockProps} />);
    const image = screen.getByAltText(mockProps.alt);

    fireEvent.click(image);
    expect(mockProps.onImageClick).toHaveBeenCalledWith(mockProps.src);
  });
});
