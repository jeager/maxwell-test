import { render, screen } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  describe("adds the correct colors", () => {
    it("red", () => {
      render(
        <Button color="red" onClick={jest.fn()}>
          Button
        </Button>
      );
      expect(screen.getByText("Button")).toHaveClass("button-base red");
    });
    it("green", () => {
      render(
        <Button color="green" onClick={jest.fn()}>
          Button
        </Button>
      );
      expect(screen.getByText("Button")).toHaveClass("button-base green");
    });

    it("default", () => {
      render(<Button onClick={jest.fn()}>Button</Button>);
      expect(screen.getByText("Button")).toHaveClass("button-base default");
    });
  });

  it("adds the small class", () => {
    render(
      <Button small onClick={jest.fn()}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toHaveClass("button-base small");
  });
});
