export default function AboutSection() {
  return (
    <section id="about" className="relative bg-transparent w-full h-auto">
      <div className="flex flex-col justify-center items-center space-y-48 relative">
        <div className="flex flex-col space-y-4 w-full font-poppins">
          <h1
            data-aos="fade-up"
            className="text-6xl font-bold dark:text-white text-black text-center"
          >
            About Me
          </h1>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            Hi! I'm <span className="font-bold">Mathis</span>, an 18-year-old
            developer from France, living near Toulouse and Perpignan.
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            I discovered programming at the age of{" "}
            <span className="font-bold">15/16</span> with{" "}
            <span className="font-bold text-[#9744ea]">Python</span>.{" "}
          </p>
          <p
            data-aos="fade-up"
            className="text-xl md:text-2xl dark:text-white/75 text-black/75 text-center"
          >
            Over time, I expanded my knowledge to{" "}
            <span className="font-bold text-[#9744ea]">JavaScript</span>,{" "}
            <span className="font-bold text-[#9744ea]">HTML</span>, and{" "}
            <span className="font-bold text-[#9744ea]">CSS</span>.{" "}
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            Currently, I'm diving deeper into{" "}
            <span className="font-bold text-[#9744ea]">TypeScript</span> for my
            personal projects and exploring{" "}
            <span className="font-bold text-[#9744ea]">C</span> through the{" "}
            <span className="font-bold">42 School</span>'s curriculum.
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            As a passionate{" "}
            <span className="text-[#9744ea] font-bold">Full-Stack</span>{" "}
            developer, I'm driven by my love for{" "}
            <span className="text-[#9744ea] font-bold">Web Development</span>{" "}
            and <span className="text-[#9744ea] font-bold">Cybersecurity</span>.
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            I've also developed several{" "}
            <span className="text-[#9744ea] font-bold">Discord bots</span>,
            starting with one in Python and later expanding my skills to{" "}
            <span className="font-bold text-[#9744ea]">JavaScript</span> and{" "}
            <span className="font-bold text-[#9744ea]">TypeScript</span> from
            2021 to 2024.
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            When I'm not coding, I enjoy playing{" "}
            <span className="text-[#9744ea] font-bold">Football</span>,{" "}
            <span className="text-[#9744ea] font-bold">Rocket League</span>,{" "}
            <span className="text-[#9744ea] font-bold">F1 24</span>, and{" "}
            <span className="text-[#9744ea] font-bold">
              Red Dead Redemption 2
            </span>
            .
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            I'm also a huge fan of{" "}
            <span className="text-[#9744ea] font-bold">Football</span> and{" "}
            <span className="text-[#9744ea] font-bold">Motorsports</span>.
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            I'm currently working on a project called{" "}
            <a
              href="https://fthreads.live/"
              target="_blank"
              className="text-[#9744ea] font-bold"
            >
              M'Astral
            </a>
            , which I'm really excited about.
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl dark:text-white/75 text-black/75 text-center"
          >
            I'm proud to be a student at{" "}
            <a
              href="https://42.fr/"
              target="_blank"
              className="text-[#9744ea] font-bold"
            >
              42 School
            </a>{" "}
            since <span className="font-bold">November 4, 2024</span>, and
            currently in my{" "}
            <span className="text-[#9744ea] font-bold">first year</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
