import { render, screen } from "@testing-library/react";
import Text from ".";

test("Text component", () => {
  render(<Text>Sample Text</Text>);
  const element = screen.getByText(/Sample Text/i);
  expect(element).toBeInTheDocument();
});

test("Text component with default variant = title", () => {
  render(<Text>Sample Text</Text>);
  const element = screen.getByText(/Sample Text/i);
  expect(element.classList.contains("title")).toBe(true);
});

test("Text component with variant = cta", () => {
  render(<Text variant={"cta"}>Sample Text</Text>);
  const element = screen.getByText(/Sample Text/i);
  expect(element.classList.contains("cta")).toBe(true);
});
