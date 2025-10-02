import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

describe("test Projects component", () => {
  test("renders Projects correctly", () => {
    render(<Projects />);

    expect(screen.getByTestId("projects")).toBeTruthy();
    expect(screen.getAllByRole("heading").length).toEqual(5);
    expect(screen.getAllByRole("link").length).toEqual(5);
  });
});
