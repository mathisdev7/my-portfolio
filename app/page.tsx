"use client";
import Navbar from "@/components/landing/Navbar";
import AboutSection from "@/components/landing/sections/About";
import ContactSection from "@/components/landing/sections/Contact";
import HomeSection from "@/components/landing/sections/Home";
import ProjectsSection from "@/components/landing/sections/Projects";
import SkillsSection from "@/components/landing/sections/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const handleMouseMove = (event: any) => {
      const x = event.clientX;
      const y = event.clientY;
      setGradient(
        `radial-gradient(circle at ${x}px ${y}px, rgba(119, 101, 227, 0.15), transparent 15%)`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  useEffect(() => {
    const smoothScroll = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector("nav")?.offsetHeight;
        if (!navbarHeight) return;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        console.error("Element not found");
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <main className="w-full h-full">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <section className="w-full h-full" style={{ background: gradient }}>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </section>
    </main>
  );
}
