import * as motion from "motion/react-client";

function About() {
  return (
    <>
      <div id="about" className="min-h-screen overflow-x-hidden bg-black px-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
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
          className="overflow-hidden relative mb-8 mt-10 flex flex-col items-center gap-5 overflow-x-hidden text-center text-4xl uppercase font-robert-regular text-violet-700 font-black"
        >
          Hello I am Nirmal Chhetri <br />I am a webdeveloper and a life long
          learner
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
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
            amount: 0.6,
          }}
          className="flex justify-around items-center w-full  flex-col md:flex-row"
        >
          <div className="font-zentry uppercase text-2xl text-white mt-5 font-bold ">
            <p className="bg-blue-300 px-10 py-5">
              I love webdevelopment it is very vast
            </p>
            <p className="bg-red-300 mt-6 px-4 py-5">
              I studie Bcsit in apex college Pokhara university
            </p>
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
