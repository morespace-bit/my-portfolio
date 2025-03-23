"use client";
import { TiLocationArrow } from "react-icons/ti";
import * as motion from "motion/react-client";

import Button from "./Button";
function Hero() {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue"
      >
        <video
          src="/videos/thevideo.webm"
          autoPlay
          loop
          muted
          id="next-video"
          className="absolute-center absolute z-20 w-screen h-screen object-cover object-center"
        ></video>
        <motion.div
          initial={{ opacity: 0 }} // Start fully transparent
          animate={{ opacity: 1 }} // Fade to fully visible
          transition={{
            duration: 3, // Transition duration in seconds
            ease: "easeInOut", // Smooth easing effect
          }}
          className="uppercase font-zentry font-black absolute z-40 text-violet-700 bottom-5 right-10  text-5xl md:text-9xl "
        >
          Flies
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} // Start fully transparent
          animate={{ opacity: 1 }} // Fade to fully visible
          transition={{
            duration: 2, // Transition duration in seconds
            ease: "easeInOut", // Smooth easing effect
          }}
          className=" absolute left-0 top-0 size-full z-40"
        >
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="uppercase font-zentry font-black    z-40 text-violet-700 text-5xl md:text-9xl ">
              {" "}
              Time
            </h1>
            <p className=" px-10 max-w-64 font-robert-medium text-blue-600 text-2xl font-bold">
              Live the best out of Life <br />
              Cuz you never know
            </p>
            <Button id="watch tailer" title="" leftIcon={<TiLocationArrow />} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
