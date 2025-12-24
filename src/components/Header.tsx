"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MenuIcon } from "@/icons/MenuIcon";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer to detect section themes
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -90% 0px", // Focus on the top part of the viewport where the header is
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newTheme = entry.target.getAttribute("data-header-theme") as
            | "light"
            | "dark";
          if (newTheme) {
            setTheme(newTheme);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Select all elements with data-header-theme
    const sections = document.querySelectorAll("[data-header-theme]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks = [
    {
      name: "Música",
      href: "#songs",
      description: "Explora nuestras producciones más recientes.",
    },
    {
      name: "Ackee Beats",
      href: "https://www.ackeebeats.xyz/",
      description: "Nuestra tienda de beats exclusiva.",
      external: true,
    },
    {
      name: "Nosotros",
      href: "#about",
      description: "Conoce nuestra historia y experiencia.",
    },
    {
      name: "Contacto",
      href: "#contact",
      description: "Hablemos sobre tu próximo proyecto musical.",
    },
  ];

  // Logic for dynamic styling
  // Priority 1: Menu Open -> White background, black text
  // Priority 2: Not Scrolled -> Transparent background, white text (Premium Hero Look)
  // Priority 3: Scrolled -> Adaptive theme

  const isDarkTheme = theme === "dark";

  let headerClass =
    "transition-all duration-500 md:fixed sticky top-0 left-0 right-0 z-[100] ";
  let logoClass =
    "flex items-center space-x-2 logoFLP text-2xl md:text-3xl font-bold transition-all duration-300 relative z-[60] hover:scale-105 ";
  let linkClass =
    "transition-colors relative group font-semibold text-sm lg:text-base ";
  let mobileButtonClass =
    "md:hidden relative z-[60] p-2 transition-all duration-300 rounded-full hover:bg-gray-100/50 focus:outline-none ";

  if (isMenuOpen) {
    headerClass += "bg-white py-3 border-b border-gray-200 shadow-sm";
    logoClass += "text-primario";
    linkClass += "text-gray-900";
    mobileButtonClass += "text-gray-900";
  } else if (!isScrolled) {
    // Desktop: Transparent / White Text | Mobile: White / Primary Text (per user request for mobile always white)
    headerClass +=
      "md:bg-transparent bg-white py-6 md:py-8 py-4 md:border-transparent border-b border-gray-100";
    logoClass += "md:text-white text-primario";
    linkClass +=
      "md:text-white text-gray-900 hover:text-primario md:hover:text-white/80";
    mobileButtonClass += "text-gray-900";
  } else {
    // Scrolled & Smart Theme
    if (isDarkTheme) {
      headerClass +=
        "bg-dark/95 py-3 border-b border-white/10 shadow-sm backdrop-blur-md";
      logoClass += "text-primario";
      linkClass += "text-white hover:text-primario";
      mobileButtonClass += "text-white";
    } else {
      headerClass +=
        "bg-white/98 py-3 border-b border-gray-200/50 shadow-sm backdrop-blur-md";
      logoClass += "text-primario hover:text-primary-dark";
      linkClass += "text-gray-900 hover:text-primario";
      mobileButtonClass += "text-gray-900";
    }
  }

  return (
    <>
      <header ref={headerRef} className={headerClass}>
        <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
          <Link href="/" onClick={closeMenu} className={logoClass}>
            FLProductions
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className={linkClass}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    !isScrolled && !isMenuOpen ? "bg-white" : "bg-primario"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={mobileButtonClass}
            aria-label="Toggle Menu"
          >
            <MenuIcon isOpen={isMenuOpen} className="text-3xl" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } rounded-l-[2.5rem] overflow-hidden flex flex-col`}
        >
          <div className="h-40 bg-gradient-to-br from-primario/25 via-primary/10 to-transparent relative flex-shrink-0">
            <div className="absolute bottom-8 left-8">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/80 block mb-2">
                Menú Principal
              </span>
              <div className="h-1 w-12 bg-primario rounded-full"></div>
            </div>
          </div>

          <nav className="flex flex-col flex-grow px-8 pt-6 pb-12 overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className={`transition-all duration-500 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 150}ms` }}
                >
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    onClick={closeMenu}
                    className="flex flex-col group py-4"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl font-black text-gray-900 group-hover:text-primario transition-colors">
                        {link.name}
                      </span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primario font-bold">
                        →
                      </span>
                    </div>
                    {link.description && (
                      <span className="text-sm text-gray-500 mt-1 font-medium leading-relaxed group-hover:text-gray-700 transition-colors">
                        {link.description}
                      </span>
                    )}
                  </Link>
                  <div className="h-px w-full bg-gray-100/80"></div>
                </div>
              ))}
            </div>

            <div
              className={`mt-auto pt-12 transition-all duration-700 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 group">
                <p className="text-lg font-black text-gray-900 mb-1 group-hover:text-primario transition-colors">
                  FLProductions
                </p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Estudio de grabación
                </p>
              </div>
              <p className="text-gray-300 text-[10px] mt-8 text-center font-bold uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} By LeotheProdu
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
