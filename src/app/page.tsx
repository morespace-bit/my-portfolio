import Hero from "./components/Hero";
import About from "./components/About";
import Sticky from "./components/Sticky";

export default function page() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About />
        <Sticky />
      </main>
    </>
  );
}
