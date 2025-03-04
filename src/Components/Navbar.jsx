import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-end items-center md:px-16 md:py-8 px-3 py-5">
        {/* Desktop menu */}
        <ul className="hidden sm:flex sm:gap-8">
          {["Home", "Works", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "text-[#FF6464] font-medium" : "text-black"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="text-lg sm:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="sm:hidden bg-white shadow-md absolute top-16 right-0 w-40 flex flex-col gap-2 p-4">
            {["Home", "Works", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF6464] font-medium" : "text-black"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
