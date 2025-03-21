import Hero from "./components/Hero";
import About from "./components/About";

export default function page() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About />
      </main>
    </>
  );
}
