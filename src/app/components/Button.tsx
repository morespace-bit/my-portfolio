import React from "react";
import * as motion from "motion/react-client";

type ButtonProps = {
  id: string;
  title: string | undefined;
  leftIcon?: React.ReactElement; // Ensure this is a valid React element
};

const Button: React.FC<ButtonProps> = ({ id, title, leftIcon }) => {
  return (
    <motion.button
      id={id}
      className="flex items-center gap-2 px-2 py-2 bg-blue-500 text-white rounded cursor-pointer mx-10 mt-5 hover:scale-110 active:scale-95 ease-in-out"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {title}
      <a href="https://www.youtube.com/watch?v=5e6IobNg-lk" target="_blank">
        <span className="font-robert-medium">Original Video</span>
      </a>
    </motion.button>
  );
};

export default Button;
