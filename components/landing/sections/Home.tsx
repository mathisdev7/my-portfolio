import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomeSection() {
  return (
    <section id="home" className="h-full z-40 w-full relative">
      <div className="flex flex-col justify-center items-center h-full w-full z-30 top-32">
        <Avatar data-aos="fade-in" className="w-40 h-40 relative bottom-8">
          <AvatarImage src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
        <h1
          data-aos="fade-up"
          className="text-2xl xl:text-6xl lg:text-3xl md:text-2xl font-bold dark:text-white text-black text-center"
        >
          Hi, I'm <span className="text-[#9744ea]">Mathis</span> 👋
        </h1>
        <p
          data-aos="fade-in"
          className="text-xl dark:text-white/75 text-black/75 text-center w-full md:w-1/4 relative top-6 font-poppins"
        >
          I'm a passionate{" "}
          <span className="text-[#9744ea] font-bold">Full-Stack Developer</span>{" "}
          based in France. At{" "}
          <a
            href="https://42.fr/"
            target="_blank"
            className="text-[#9744ea] font-bold"
          >
            42 School
          </a>
          , I’m honing my skills in{" "}
          <span className="font-bold text-[#9744ea]">Web Development</span> and{" "}
          <span className="font-bold text-[#9744ea]">Cybersecurity</span>.{" "}
          <span className="font-bold text-[#9744ea]">
            If you want to know more about me, scroll down!
          </span>
        </p>

        <div className="flex space-x-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-2 bg-[#9744ea] text-white font-bold rounded-md shadow-lg hover:bg-[#7b34c9] transition"
          >
            View My Work
          </a>
          <a
            href="https://github.com/mathisdev7"
            target="_blank"
            className="px-6 py-2 border-2 border-[#9744ea] text-[#9744ea] font-bold rounded-md hover:bg-[#9744ea] hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
