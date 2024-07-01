import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

import logoDapoerSariwangi from "../../assets/logo-dsw.png";
import Button from "./Button";

interface Hyperlink {
  id: string
  path: string
};

const links: Hyperlink[] = [
  { id: "home", path: "/" },
  { id: "resto", path: "/resto" },
  { id: "catering", path: "/catering" },
  { id: "about", path: "/about" },
  { id: "contact", path: "/contact" },
];

const Header = () => {
  const currentPath = useLocation().pathname;
  
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`py-3 fixed top-0 w-full group transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "lg:py-6 bg-transparent"} hover:lg:bg-white z-[999]`}>
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="block h-10 lg:h-12">
          <img
            src={logoDapoerSariwangi}
            alt="Dapoer Sariwangi"
            className="h-full"
          />
        </Link>

        {/* Desktop Profile */}
        <ul className={`hidden lg:flex ${scrolled ? "text-primary" : "text-white group-hover:text-primary"} tracking-wider gap-12`}>
          {links.map(({ id, path }: Hyperlink) => (
            <li
              key={id}
              className={`uppercase font-semibold hover:text-secondary hover:-translate-y-0.5 transition-all duration-300 ${path === currentPath && "text-secondary"}`}
            >
              <Link to={path}>
                {id}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-2xl p-1.5 aspect-square rounded-full border border-white"
        >
          <RiMenu3Fill className={`${scrolled ? "text-accent" : "text-white"}`} />
        </button>
        <div
          className={`fixed inset-0 bg-primary/50 ${isOpen ? "block" : "hidden"} transition-all duration-300`}
          onClick={() => setIsOpen(false)}
        />
        <ul className={`fixed top-0 right-0 h-full w-3/4 bg-white transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col gap-6 items-center justify-center z-10`}>
          {links.map(({ id, path }: Hyperlink) => (
            <li
              key={id}
              className={`uppercase font-semibold hover:text-secondary transition-all duration-300 ${path === currentPath && "text-secondary"}`}
              onClick={() => setIsOpen(false)}
            >
              <Link to={path}>
                {id}
              </Link>
            </li>
          ))}
        </ul>

        <Button className="hidden lg:block">Find Us</Button>
      </nav>
    </header>
  );
};

export default Header;