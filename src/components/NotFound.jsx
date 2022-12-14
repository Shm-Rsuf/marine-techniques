import { useRef } from "react";
import { useGsapNotFoundHeading, useGsapNotFoundImage } from "../hooks/gsap";

const NotFound = () => {
  const leftHeadingRef = useRef(null);
  const rightHeadingRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useGsapNotFoundHeading(leftHeadingRef);
  useGsapNotFoundHeading(rightHeadingRef, "100vw");

  useGsapNotFoundImage(leftImageRef);
  useGsapNotFoundImage(rightImageRef);

  return (
    <section className="not-found wrapper">
      <div ref={leftHeadingRef} className="heading-one">
        Sorry, we couldn't
      </div>
      <div ref={rightImageRef} className="img-one">
        <img
          src="https://images.pexels.com/photos/13262992/pexels-photo-13262992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Sitting on a Hood of an Old Volkswagen Golf Car"
        />
      </div>
      <div ref={leftImageRef} className="img-two">
        <img
          src="https://images.pexels.com/photos/5808388/pexels-photo-5808388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman showing retro photo camera and holding blooming flower"
        />
      </div>
      <div ref={rightHeadingRef} className="heading-two">
        Find that page
      </div>
    </section>
  );
};

export default NotFound;
