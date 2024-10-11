import { Icons } from "@/lib/assets/icons";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ui/toggle-mode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <nav className="flex fixed w-full h-16 backdrop-blur-md z-[60] items-center px-6 md:px-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-4">
            <a
              href="#home"
              className="hidden md:block dark:text-white text-black text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="hidden md:block text-[#9744ea] text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="hidden md:block dark:text-white text-black text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hidden md:block text-[#9744ea] text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hidden md:block dark:text-white text-black text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              Contact
            </a>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                  <X className="size-7" />
                ) : (
                  <Menu className="size-7" />
                )}
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <ModeToggle />
            <Github
              onClick={() => {
                window.location.href = "https://github.com/mathisdev7";
              }}
              className="size-7 dark:text-white text-black hover:scale-105 transition duration-500 cursor-pointer"
            />
            <Icons.discord
              onClick={() => {
                window.location.href =
                  "https://discord.com/users/548028946097111045";
              }}
              className="size-7 text-[#9744ea] hover:scale-105 transition duration-500 cursor-pointer"
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 50,
          }}
          className="md:hidden flex flex-col justify-center items-center w-full h-full"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <a
              href="#home"
              className="block py-2 px-4 text-black dark:text-white text-lg font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 px-4 text-[#9744ea] text-lg font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="block py-2 px-4 text-black dark:text-white text-lg font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 text-[#9744ea] text-lg font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
