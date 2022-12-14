import { useRef } from "react";
import {
  useGsapAboutLeftShutterOpen,
  useGsapAboutRightShutterOpen,
} from "../hooks/gsap";

const About = () => {
  const aboutRef = useRef(null);
  const aboutleftShutterRef = useRef(null);
  const aboutRightShutterRef = useRef(null);

  useGsapAboutLeftShutterOpen(aboutleftShutterRef, aboutRef);
  useGsapAboutRightShutterOpen(aboutRightShutterRef, aboutRef);

  return (
    <section ref={aboutRef} className="about wrapper">
      <h2 className="section-title heading-text">About Us</h2>
      <div className="about-us">
        <div className="about-left">
          <span className="about-text">About our company</span>
          <p>
            Marine Technics was founded in 1999 by former employees from Deutz
            Rotterdam.
          </p>
          <p>
            Now 23 years later, Marine Technics render service to well-known
            engine makes such as Deutz, MaK, Wärtsilä, ABC, Bergen Engines and
            is an well-established repair company with satisfied customers all
            around the globe.
          </p>
          <p>
            From our workshop in Oudewater, we are able to serve our clientele,
            existing of ship owners, shipyards and ship management offices, who
            values our hand-on mentality, flexibility and good craftsmanship.
          </p>
          <p>
            Because we handle short lines between customer, engineer and
            backoffice, we can anticipate rapidly on any situation.
          </p>
          <span ref={aboutleftShutterRef} className="about-shutter-left"></span>
        </div>
        <div className="about-right">
          <span className="about-text">About our company</span>
          <p>
            Marine Technics was founded in 1999 by former employees from Deutz
            Rotterdam.
          </p>
          <p>
            Now 23 years later, Marine Technics render service to well-known
            engine makes such as Deutz, MaK, Wärtsilä, ABC, Bergen Engines and
            is an well-established repair company with satisfied customers all
            around the globe.
          </p>
          <p>
            From our workshop in Oudewater, we are able to serve our clientele,
            existing of ship owners, shipyards and ship management offices, who
            values our hand-on mentality, flexibility and good craftsmanship.
          </p>
          <p>
            Because we handle short lines between customer, engineer and
            backoffice, we can anticipate rapidly on any situation.
          </p>
          <span
            ref={aboutRightShutterRef}
            className="about-shutter-right"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default About;
