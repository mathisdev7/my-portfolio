import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/lib/assets/icons";

export default function SkillsSection() {
  const xp = [
    {
      id: 1,
      name: "Javascript",
      experience: "3+ years",
      image: Icons.javascript,
    },
    {
      id: 2,
      name: "Typescript",
      experience: "1+ year",
      image: Icons.typescript,
    },
    {
      id: 3,
      name: "C",
      experience: "1+ month",
      image: Icons.c,
    },
    {
      id: 4,
      name: "Python",
      experience: "1+ year",
      image: Icons.python,
    },
    {
      id: 5,
      name: "HTML",
      experience: "1+ year",
      image: Icons.html,
    },
    {
      id: 6,
      name: "CSS",
      experience: "1+ year",
      image: Icons.css,
    },
    {
      id: 7,
      name: "React",
      experience: "1+ year",
      image: Icons.react,
    },
    {
      id: 8,
      name: "Next.js",
      experience: "1+ year",
      image: Icons.nextjs,
    },
    {
      id: 9,
      name: "Git",
      experience: "2+ years",
      image: Icons.git,
    },
    {
      id: 10,
      name: "TailwindCSS",
      experience: "1+ year",
      image: Icons.tailwind,
    },
    {
      id: 11,
      name: "Express",
      experience: "1+ year",
      image: Icons.express,
    },
    {
      id: 12,
      name: "MySQL",
      experience: "2+ years",
      image: Icons.mysql,
    },
    {
      id: 13,
      name: "MongoDB",
      experience: "2+ years",
      image: Icons.mongodb,
    },
    {
      id: 14,
      name: "Discord.js",
      experience: "3+ years",
      image: Icons.discordjs,
    },
    {
      id: 15,
      name: "Remix.js",
      experience: "1 project",
      image: Icons.remixjs,
    },
  ];
  return (
    <section
      id="skills"
      className="flex flex-col space-y-16 w-full h-auto font-poppins relative mt-96"
    >
      <h1
        data-aos="fade-in"
        className="text-6xl font-bold dark:text-white text-black text-center relative"
      >
        Skills
      </h1>
      <div className="relative flex flex-row justify-center items-center h-1/3">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-5 justify-items-center items-center">
          {xp.map((item) => (
            <Card
              key={item.id}
              className="w-36 md:w-56 h-40 duration-300 bg-transparent self-center"
            >
              <CardContent className="flex flex-col justify-center items-center space-y-4 px-8 py-2">
                <p className="text-lg dark:text-white text-center font-poppins">
                  {item.name}
                </p>
                {item.image({ className: "w-8 h-8 text-[#9744ea]" })}
                <p className="text-lg dark:text-white text-center font-bold">
                  {item.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
