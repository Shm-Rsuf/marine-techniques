import { useRef } from "react";
import { useGsapShutterOpen } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutterOneRef = useRef(null);
  const shutterTwoRef = useRef(null);

  useGsapShutterOpen(shutterOneRef, 0.75, heroRef);
  useGsapShutterOpen(shutterTwoRef, 0, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="marine">
        Marine <span ref={shutterOneRef}></span>
      </h1>

      <h1 className="technique">
        Technique<span ref={shutterTwoRef}></span>
      </h1>
    </section>
  );
};

export default Hero;
