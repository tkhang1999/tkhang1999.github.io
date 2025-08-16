import { render, screen } from "@testing-library/react";
import Work from "../components/Work";

describe("test Work component", () => {
  test("renders Work correctly", () => {
    render(<Work />);

    expect(screen.getByTestId("work")).toBeTruthy();
    expect(screen.getAllByRole("heading").length).toEqual(1);
    expect(screen.getAllByRole("link").length).toEqual(8);
    expect(screen.getAllByRole("paragraph").length).toEqual(16);
  });
});
