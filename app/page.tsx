"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { Icons } from "@/lib/assets/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Typecript from "../public/typescript.png";

export default function Home() {
  const xp = [
    {
      id: 1,
      name: "Javascript",
      designation: "3+ years",
      image:
        "https://i.pinimg.com/564x/b4/de/20/b4de205cb6d4e7cad43c2971f780cfd9.jpg",
    },
    {
      id: 2,
      name: "Typescript",
      designation: "1+ years",
      image: Typecript.src,
    },
    {
      id: 3,
      name: "C",
      designation: "1+ months",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-c-language-9132410-7417301.png",
    },
    {
      id: 4,
      name: "Python",
      designation: "1+ years",
      image: "https://cdn.icon-icons.com/icons2/1495/PNG/512/python_103279.png",
    },
    {
      id: 5,
      name: "HTML",
      designation: "1+ years",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    },
    {
      id: 6,
      name: "CSS",
      designation: "1+ years",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    },
    {
      id: 7,
      name: "React",
      designation: "1+ years",
      image:
        "https://banner2.cleanpng.com/20180720/kha/kisspng-react-javascript-library-redux-user-interface-tesseract-5b52265cc83931.4218499515321104288201.jpg",
    },
    {
      id: 8,
      name: "NextJS",
      designation: "1+ years",
      image: "https://www.datocms-assets.com/98835/1684410508-image-7.png",
    },
    {
      id: 9,
      name: "Git",
      designation: "2+ years",
      image: "https://cdn-icons-png.flaticon.com/512/4494/4494740.png",
    },
    {
      id: 10,
      name: "TailwindCSS",
      designation: "1+ years",
      image: "https://files.raycast.com/80x1pxra7cyabkoyxqvlono2sg9p",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  useEffect(() => {
    const smoothScroll = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget?.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
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
  });
  return (
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <div className="absolute top-0 w-full h-full">
        <nav className="flex fixed w-full h-16 bg-gray-400/10 backdrop-blur-md z-50">
          <div className="flex space-x-4 h-auto relative top-6 left-4 justify-start w-full z-50">
            <a
              href="#home"
              className="dark:text-white text-black text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer h-auto"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#18CCFC] text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              className="dark:text-white text-black text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#projects"
              className="text-[#18CCFC] text-xl font-poppins font-bold hover:scale-105 transition duration-500 cursor-pointer"
            >
              Contact
            </a>
          </div>
          <div className="flex space-x-4 relative justify-end w-full">
            <ModeToggle />
            <Github
              onClick={() => {
                window.location.href = "https://github.com/mathisdev7";
              }}
              className="w-7 h-7 relative top-6 right-4 dark:text-white text-black shadow-2xl hover:scale-105 transition duration-500 cursor-pointer"
            />
            <Icons.discord
              onClick={() => {
                window.location.href =
                  "https://discord.com/users/548028946097111045";
              }}
              className="w-7 h-7 relative top-6 right-4 dark:text-white text-black shadow-2xl hover:scale-105 transition duration-500 cursor-pointer"
            />
          </div>
        </nav>
        <section id="home" className="relative h-[100vh] z-40 bg-transparent">
          <div className="flex flex-col justify-center items-center h-full top-32 z-30">
            <Avatar data-aos="fade-in" className="w-40 h-40 relative bottom-8">
              <AvatarImage src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
            <h1
              data-aos="fade-up"
              data-aos-delay="10000"
              className="text-6xl font-bold dark:text-white text-black text-center"
            >
              Hi, I'm <span className="text-[#18CCFC]">Mathis</span>!
            </h1>
            <p
              data-aos="fade-up"
              className="text-xl dark:text-white/75 text-black/75 text-center w-1/4 relative top-6 font-poppins"
            >
              I'm an 18 year old{" "}
              <span className="text-[#18CCFF] font-bold">
                Full-Stack Developer
              </span>{" "}
              and student at the{" "}
              <a
                href="https://42.fr/"
                target="_blank"
                className="text-[#18CCFC] font-bold"
              >
                42 School
              </a>
              . I have a passion for web development and cybersecurity.{" "}
              <span className="font-bold">
                If you want to know more about me, scroll down!
              </span>
            </p>
          </div>
        </section>
        <section id="about" className="relative h-[100vh] z-40 bg-transparent">
          <div className="flex flex-col justify-center items-center h-full z-40 space-y-20">
            <div className="flex flex-col space-y-4 w-full font-poppins z-40">
              <h1
                data-aos="fade-up"
                className="text-6xl font-bold dark:text-white text-black text-center"
              >
                About me
              </h1>
              <p
                data-aos="fade-up"
                className="text-xl dark:text-white/75 text-black/75 text-center"
              >
                My name is <span className="font-bold">Mathis</span>, I'm 18
                years old and I live in France, near Toulouse and Perpignan.
              </p>
              <p
                data-aos="fade-up"
                className="text-xl dark:text-white/75 text-black/75 text-center"
              >
                I started programming when I was{" "}
                <span className="font-bold">15/16</span> years old, I started
                with <span className="font-bold text-[#18CCFC]">Python</span>
                <br />
                and then I learned{" "}
                <span className="font-bold text-[#18CCFC]">
                  Javascript
                </span>, <span className="font-bold text-[#18CCFC]">HTML</span>,{" "}
                <span className="font-bold text-[#18CCFC]">CSS</span>. I'm
                currently learning
                <br />
                <span className="font-bold text-[#18CCFC]">Typescript</span> for
                my personal projects and{" "}
                <span className="font-bold text-[#18CCFC]">C</span> for the{" "}
                <span className="font-bold">42 School's</span> projects.
              </p>
              <p
                data-aos="fade-up"
                className="text-xl dark:text-white/75 text-black/75 text-center"
              >
                I'm now a{" "}
                <span className="text-[#18CCFC] font-bold">Full-Stack</span>{" "}
                developer with a passion for{" "}
                <span className="text-[#18CCFC] font-bold">
                  Web Development
                </span>{" "}
                and{" "}
                <span className="text-[#18CCFC] font-bold">Cybersecurity</span>.
              </p>
              <p
                data-aos="fade-up"
                className="text-xl dark:text-white/75 text-black/75 text-center"
              >
                I'm currently working on a project called{" "}
                <a
                  href="https://github.com/mathisdev7/Fthreads"
                  target="_blank"
                  className="text-[#18CCFC] font-bold"
                >
                  F'Threads
                </a>
                .
              </p>
              <p
                data-aos="fade-up"
                className="text-xl dark:text-white/75 text-black/75 text-center"
              >
                I'm also a student at the{" "}
                <a
                  href="https://42.fr/"
                  target="_blank"
                  className="text-[#18CCFC] font-bold"
                >
                  42 School
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col space-y-12 w-full font-poppins">
              <h1
                data-aos="fade-in"
                className="text-6xl font-bold dark:text-white text-black text-center"
              >
                Skills
              </h1>
              <div className="flex flex-row justify-center items-center h-1/3 z-30">
                <AnimatedTooltip items={xp} />
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="relative h-[100vh] z-40 bg-transparent"
        >
          <div className="flex flex-col justify-center items-center h-full z-30 space-y-20">
            <div className="flex flex-col space-y-4 w-full font-poppins">
              <h1
                data-aos="fade-in"
                className="text-6xl font-bold dark:text-white text-black text-center"
              >
                Projects
              </h1>
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
                  <PinContainer
                    title="https://techvox.vercel.app/"
                    href="https://techvox.vercel.app/"
                    className="w-72 h-72 flex flex-col justify-center items-center"
                  >
                    <p className="text-lg  text-white text-center">
                      Techvox is a website where you can vote for the latest
                      tech <br />
                      trends
                    </p>
                    <Image
                      src="https://raw.githubusercontent.com/mathisdev7/Techvox/3da3125bd14aaaccb62af4ddcfe6f58c1da92934/public/icon.svg"
                      alt="techvox"
                      data-aos="flip-down"
                      width={1000}
                      height={1000}
                      className="size-56"
                    />
                  </PinContainer>
                </div>
                <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
                  <PinContainer
                    title="https://github.com/mathisdev7/Fthreads/tree/main"
                    href="https://github.com/mathisdev7/Fthreads/tree/main"
                    className="w-72 h-72 flex flex-col justify-center items-center"
                  >
                    <p className="text-lg  text-white text-center">
                      F'threads is a website where you can create threads and
                      <br />
                      share them with your friends.
                    </p>
                    <Image
                      src="https://github.com/mathisdev7/Fthreads/blob/main/public/icon%20(2).png?raw=true"
                      alt="fthreads"
                      data-aos="flip-down"
                      width={1000}
                      height={1000}
                      className="size-56"
                    />
                  </PinContainer>
                </div>
                <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
                  <PinContainer
                    title="https://top.gg/bot/971970180353777714"
                    href="https://top.gg/bot/971970180353777714"
                    className="w-72 h-72 flex flex-col justify-center items-center"
                  >
                    <p className="text-lg  text-white text-center">
                      Licensy is a discord bot that can manage your server's
                      licenses.
                    </p>
                    <Image
                      src="https://images-ext-1.discordapp.net/external/OOC2Sl83jLBJz9bWP5NjMn1f9cqbxTW5tcadZFMUOwg/%3Fsize%3D4096%26ignore%3Dtrue/https/cdn.discordapp.com/avatars/971970180353777714/aaeae5c2710ad341442ff8e66955d49e.png?format=webp&quality=lossless&width=702&height=702"
                      alt="licensy"
                      data-aos="flip-down"
                      width={1000}
                      height={1000}
                      className="size-56"
                    />
                  </PinContainer>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-12 w-full font-poppins">
              <h1 className="text-6xl font-bold dark:text-white text-black text-center">
                Contact
              </h1>
              <p className="text-xl dark:text-white/75 text-black/75 text-center">
                You can contact me at{" "}
                <span className="text-[#18CCFC] font-bold">
                  mathisdev7@gmail.com
                </span>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
