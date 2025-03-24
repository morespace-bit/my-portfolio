import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

function Sticky() {
  const content = [
    {
      title: "To do app with react",
      description:
        "This is one of the fist project that I did with react. Very basic app with basic functionalities the project is live at github",
      content: (
        <div className="flex flex-col gap-5 h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <Image src="/todo.jpeg" alt="todoimg" width={300} height={300} />
          <div className="flex justify-around items-center">
            <button className="bg-black rounded-full px-10 py-2 hover:bg-red-400 hover:scale-125 transition-all ease-in-out duration-75">
              Github
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Meme generator",
      description:
        "This is my second project using react. In this react app I learned api fetching and learned api fetching. Also learned the use effect hook",
      content: (
        <div className="flex flex-col gap-5 h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <Image src="/meme.jpeg" alt="todoimg" width={200} height={200} />
          <div className="flex justify-around items-center">
            <button className="bg-red-700 rounded-full px-10 py-2 hover:bg-red-400 hover:scale-125 transition-all ease-in-out duration-75">
              Github
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Movie web application",
      description:
        "Movie web application build using the movie database. I larned tailwind css while making this project.",
      content: (
        <div className="flex flex-col gap-5 h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <Image src="/movie.jpeg" alt="todoimg" width={300} height={300} />
          <div className="flex justify-around items-center">
            <button className="bg-black rounded-full px-10 py-2 hover:bg-red-400 hover:scale-125 transition-all ease-in-out duration-75">
              Github
            </button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}

export default Sticky;
