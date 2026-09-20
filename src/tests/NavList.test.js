import React from "react";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";

import NavList, { navItems } from "../components/NavList";

describe("test NavList component", () => {
  test("renders NavList correctly", () => {
    render(<NavList />);

    expect(screen.getByRole("list")).toBeTruthy();
    expect(screen.getAllByRole("listitem").length).toEqual(navItems.length + 1);
    expect(screen.getAllByRole("link").length).toEqual(navItems.length);
    expect(screen.getAllByRole("checkbox").length).toBeTruthy();
  });

  test("sets theme at first render", () => {
    ["dark", "light"].forEach((theme) => {
      const mockSetIsDarkTheme = jest.fn();
      jest.spyOn(React, "useEffect").mockImplementation((f) => f());
      jest
        .spyOn(React, "useState")
        .mockImplementation((initState) => [initState, mockSetIsDarkTheme]);
      jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => theme);

      render(<NavList />);

      expect(mockSetIsDarkTheme).toHaveBeenCalledTimes(1);
      expect(mockSetIsDarkTheme).toHaveBeenCalledWith(theme === "dark");

      cleanup();
    });
  });

  test("clicks a nav item", () => {
    const mockSetItem = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementation((initState) => [initState, mockSetItem]);

    render(<NavList />);
    mockSetItem.mockClear();

    const firstItem = screen.getAllByRole("link")[0];
    fireEvent.click(firstItem);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(firstItem.attributes.href.value);
  });

  test("toggles light/dark theme", () => {
    [true, false].forEach((isDark) => {
      const mockIsDarkTheme = isDark;
      const mockSetIsDarkTheme = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => [mockIsDarkTheme, mockSetIsDarkTheme]);

      render(<NavList />);
      mockSetIsDarkTheme.mockClear();
      fireEvent.click(screen.getByRole("checkbox"));

      expect(mockSetIsDarkTheme).toHaveBeenCalledTimes(1);
      expect(mockSetIsDarkTheme).toHaveBeenCalledWith(!mockIsDarkTheme);

      cleanup();
    });
  });

  test("uses the system theme when no theme is selected", () => {
    jest.restoreAllMocks();

    const originalMatchMedia = window.matchMedia;
    const mediaQuery = {
      matches: true,
      onchange: null,
    };

    window.matchMedia = jest.fn(() => mediaQuery);
    localStorage.removeItem("selected-theme");

    render(<NavList />);
    const themeToggle = screen.getByRole("checkbox");

    expect(themeToggle.checked).toBe(true);
    expect(document.body.classList.contains("dark__theme")).toBe(true);

    act(() => {
      mediaQuery.onchange({ matches: false });
    });

    expect(themeToggle.checked).toBe(false);
    expect(document.body.classList.contains("dark__theme")).toBe(false);

    window.matchMedia = originalMatchMedia;
  });

  test("keeps the user-selected theme when the system theme changes", () => {
    jest.restoreAllMocks();

    const originalMatchMedia = window.matchMedia;
    const mediaQuery = {
      matches: false,
      onchange: null,
    };

    window.matchMedia = jest.fn(() => mediaQuery);
    localStorage.removeItem("selected-theme");

    const firstRender = render(<NavList />);
    const themeToggle = screen.getByRole("checkbox");

    fireEvent.click(themeToggle);
    expect(localStorage.getItem("selected-theme")).toBe("dark");

    act(() => {
      mediaQuery.onchange({ matches: false });
    });

    expect(themeToggle.checked).toBe(true);
    expect(document.body.classList.contains("dark__theme")).toBe(true);

    firstRender.unmount();
    window.matchMedia = originalMatchMedia;
  });
});
