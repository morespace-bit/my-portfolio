import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import * as motion from "motion/react-client";

function About() {
  const words = [
    {
      text: "Hello",
      className: "text-[#8A2BE2] uppercase font-zentry text-3xl md:text-5xl",
    },
    {
      text: "It's",
      className: "text-[#8A2BE2] uppercase font-zentry text-3xl md:text-5xl",
    },
    {
      text: "Me,",
      className: "text-[#8A2BE2] uppercase font-zentry text-3xl md:text-5xl",
    },
    {
      text: "Nirmal",
      className:
        "text-blue-500 dark:text-blue-500 uppercase  font-zentry text-3xl md:text-5xl",
    },
    {
      text: "Chhetri.",
      className:
        "text-blue-500 dark:text-blue-500 uppercase font-zentry text-3xl md:text-5xl",
    },
  ];
  return (
    <>
      <div id="about" className="min-h-screen overflow-x-hidden bg-[#181818]">
        <motion.div className="relative mb-8 mt-10    flex flex-col items-center gap-5 overflow-x-hidden">
          <TypewriterEffectSmooth words={words} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring", // Smooth transition
              stiffness: 100, // Adjust stiffness
              damping: 25,
            },
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] text-[#F8D210] font-robert-medium"
        >
          I am a webdeveloper and a life long learner
        </motion.div>
      </div>
    </>
  );
}

export default About;
