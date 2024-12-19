'use client';

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flexBetween max-container padding-container sticky top-0 z-30 py-5 transition-all ${
        isScrolled ? "border-b border-gray-200 bg-white shadow-md full-navbar-width" : "bg-transparent"
      }`}
    >
      <Link href="/" className="logo-font">
        <span className="text-blue-400">IKS</span> Tech.
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-400"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact Us"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Icon */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <ul className="flex flex-col items-start gap-6 p-6">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-gray-800 hover:text-blue-400 text-lg font-medium"
              onClick={toggleMenu} // Close menu on navigation
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
