import { PinContainer } from "@/components/ui/3d-pin";
import { Icons } from "@/lib/assets/icons";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative h-auto bg-transparent mt-96">
      <div className="flex flex-col justify-center items-center h-auto z-30 space-y-20">
        <div className="flex flex-col space-y-4 w-full font-poppins">
          <h1
            data-aos="fade-in"
            className="text-6xl font-bold dark:text-white text-black text-center"
          >
            Projects
          </h1>
          <div className="md:grid grid-cols-1 gap-x-2 gap-y-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center items-center">
            <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
              <PinContainer
                title="InvitesCounter Remake"
                href="https://github.com/mathisdev7/InvitesCounter-remake"
                className="size-72 flex flex-col justify-center items-center"
              >
                <p className="text-base text-white text-center">
                  InvitesCounter is a Discord bot designed to track and count
                  the invites to your server. This project is a remake of the
                  original bot, featuring improved functionality.
                </p>

                <Icons.discordjs
                  data-aos="flip-down"
                  className="size-52 text-white"
                />
              </PinContainer>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
              <PinContainer
                title="42 Discovery Piscine"
                href="https://github.com/mathisdev7/42-discovery-piscine"
                className="size-72 flex flex-col justify-center items-center"
              >
                <p className="text-base text-white text-center">
                  42 Discovery Piscine is an introductory project at 42 School,
                  allowing you to explore the fundamentals of web development in
                  a collaborative environment.
                </p>

                <Icons.fortytwo
                  data-aos="flip-down"
                  className="size-52 text-white"
                />
              </PinContainer>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
              <PinContainer
                title="Techvox"
                href="https://github.com/mathisdev7/Techvox"
                className="size-72 flex flex-col justify-center items-center"
              >
                <p className="text-base text-white text-center">
                  Techvox is a voting platform where users can express their
                  opinions on the latest trends in technology.
                </p>
                <Image
                  src="https://i.ibb.co/W3d0YFs/icon-1.png"
                  alt="Techvox"
                  width={200}
                  height={200}
                  data-aos="flip-down"
                  className="size-52"
                />
              </PinContainer>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
              <PinContainer
                title="M'Astral"
                href="https://github.com/mathisdev7/M-Astral"
                className="size-72 flex flex-col justify-center items-center"
              >
                <p className="text-base text-white text-center">
                  M'Astral is a social platform where users can create and share
                  threads with their friends, fostering discussion and
                  collaboration.
                </p>
                <Image
                  src="https://github.com/mathisdev7/Fthreads/blob/main/public/icon%20(2).png?raw=true"
                  alt="M'Astral"
                  data-aos="flip-down"
                  width={200}
                  height={200}
                  className="size-52"
                />
              </PinContainer>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
              <PinContainer
                title="My Portfolio"
                href="https://github.com/mathisdev7/my-portfolio"
                className="size-72 flex flex-col justify-center items-center"
              >
                <p className="text-base text-white text-center">
                  My portfolio showcases all my projects, skills, and ways to
                  get in touch with me. It's a comprehensive overview of my work
                  and experience.
                </p>
                <Image
                  src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
                  alt="Portfolio"
                  data-aos="flip-down"
                  width={200}
                  height={200}
                  className="size-48 rounded-full"
                />
              </PinContainer>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12 w-auto font-poppins">
              <PinContainer
                title="Licensy"
                href="https://top.gg/bot/971970180353777714"
                className="size-72 flex flex-col justify-center items-center"
              >
                <p className="text-base text-white text-center relative bottom-4">
                  Licensy is a Discord bot that simplifies the management of
                  your server's licenses, making it easier to keep track of them
                  all in one place.
                </p>
                <Image
                  src="https://images-ext-1.discordapp.net/external/OOC2Sl83jLBJz9bWP5NjMn1f9cqbxTW5tcadZFMUOwg/%3Fsize%3D4096%26ignore%3Dtrue/https/cdn.discordapp.com/avatars/971970180353777714/aaeae5c2710ad341442ff8e66955d49e.png?format=webp&quality=lossless&width=702&height=702"
                  alt="Licensy"
                  data-aos="flip-down"
                  width={200}
                  height={200}
                  className="size-40"
                />
              </PinContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
