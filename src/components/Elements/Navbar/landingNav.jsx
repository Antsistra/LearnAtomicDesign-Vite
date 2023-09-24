import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LandingNav = (props) => {
  const { children, clicked } = props;
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (
      window.matchMedia("prefers-color-scheme: dark")
        .matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={clicked}>
            <p className="text-xl font-bold  dark:text-white text-black ">
              Toko Pak Edi
            </p>
          </Link>

          <div className="flex items-center lg:order-2">
            {children}

            <button onClick={handleThemeSwitch}>
              Coba doang
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default LandingNav;
