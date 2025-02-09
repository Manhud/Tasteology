import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { CardContent } from "./card-content";

describe("CardContent", () => {
  const mockProps = {
    title: "Test Title",
    description: "Test Description",
  };

  it("renders title and description correctly", () => {
    render(<CardContent {...mockProps} />);

    const title = screen.getByRole("heading", { name: mockProps.title });
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("mb-[10px] text-[21px] font-bold");

    const description = screen.getByText(mockProps.description);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass(
      "text-[21px] text-white font-light leading-[30px]"
    );
  });
});
