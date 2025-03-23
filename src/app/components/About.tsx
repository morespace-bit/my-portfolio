import * as motion from "motion/react-client";

function About() {
  return (
    <>
      <div id="about" className="min-h-screen overflow-x-hidden bg-black">
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
          className="relative mb-8 mt-10 flex flex-col items-center gap-5 overflow-x-hidden text-center text-4xl uppercase font-zentry text-violet-700 font-black"
        >
          Hello I am Nirmal Chhetri
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
          className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[3rem] text-violet-700 font-zentry font-black"
        >
          I am a webdeveloper and a life long learner
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
          className="flex justify-around items-center w-full"
        >
          <div className="font-circular-web text-2xl text-white ">
            <p>I love developing webdevelopment it is very vast</p>
            <p>I currently studie Bcsit in apex college Pokhara university</p>
          </div>
          <video
            src="/the.mp4"
            autoPlay
            muted
            className="h-150 w-150"
            loop
          ></video>
        </motion.div>
      </div>
    </>
  );
}

export default About;
