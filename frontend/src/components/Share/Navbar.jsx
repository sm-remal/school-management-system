"use client";

import React, { useState } from "react";
import { Menu, TextAlignEnd } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";

const  Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <nav className="max-w-7xl mx-auto bg-secondary text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      {/* <h1 className="text-xl font-semibold tracking-wide"></h1> */}
      <div>
        <Logo></Logo>
      </div>

      {/* Mobile Menu */}
      <div className="flex gap-5 items-center">
        <Button
          variant="secondary"
          className="rounded-full hidden md:block bg-white text-lime-700 hover:bg-gray-100"
        >
          Login
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-white text-black">
              {/* <Menu /> */}
              <TextAlignEnd className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-3 bg-white">
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-lime-700 transition text-lg"
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="rounded-full md:hidden block bg-lime-700 hover:bg-lime-800 text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
