import React from "react";

function About() {
  return (
    <div id="about" className="min-h-screen overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Hello and Welcome
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          I am a webdeveloper and a life long learner
        </div>
      </div>
    </div>
  );
}

export default About;
