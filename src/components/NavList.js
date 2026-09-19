import { useState, useEffect } from "react";
import Toggle from "react-toggle";

export const navItems = [
  { key: "#home", value: "Home" },
  { key: "#about", value: "About" },
  { key: "#skills", value: "Skills" },
  { key: "#work", value: "Work" },
  { key: "#projects", value: "Projects" },
];

const NavList = () => {
  const [active, setActive] = useState(window.location.hash || "#home");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("selected-theme");
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    const isDark = savedTheme
      ? savedTheme === "dark"
      : (mediaQuery?.matches ?? false);

    setIsDarkTheme(isDark);
    document.body.classList[isDark ? "add" : "remove"]("dark__theme");

    if (savedTheme || !mediaQuery) {
      return undefined;
    }

    const handleSystemThemeChange = (event) => {
      setIsDarkTheme(event.matches);
      document.body.classList.toggle("dark__theme", event.matches);
    };

    mediaQuery?.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery?.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleDarkTheme = (isDark) => {
    setIsDarkTheme(isDark);
    document.body.classList.toggle("dark__theme", isDark);
    localStorage.setItem("selected-theme", isDark ? "dark" : "light");
  };

  const getClassNameForNavLink = (hash) => {
    return hash === active ? "nav__link active" : "nav__link";
  };

  return (
    <ul className="nav__list">
      {navItems.map((item) => {
        return (
          <li key={item.key} className="nav__item">
            <a
              href={item.key}
              className={getClassNameForNavLink(item.key)}
              onClick={() => setActive(item.key)}
            >
              {item.value}
            </a>
          </li>
        );
      })}
      {/* light/dark theme toggle */}
      <li className="toggle__item">
        <Toggle
          checked={isDarkTheme}
          className="toggle__theme"
          icons={{
            checked: <i className="bx bxs-moon toggle__icon" />,
            unchecked: <i className="bx bxs-sun toggle__icon" />,
          }}
          onChange={() => toggleDarkTheme(!isDarkTheme)}
        />
      </li>
    </ul>
  );
};

export default NavList;
