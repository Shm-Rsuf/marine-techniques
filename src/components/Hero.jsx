import { useRef } from "react";
import {
  useGsapShutterOpen,
  useGsapPhotoDropping,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutterOneRef = useRef(null);
  const shutterTwoRef = useRef(null);

  const photoOneRef = useRef(null);
  const photoTwoRef = useRef(null);
  const photoThreeRef = useRef(null);
  const photoFourRef = useRef(null);
  const photoFiveRef = useRef(null);

  const photosArr = [
    photoThreeRef,
    photoOneRef,
    photoFiveRef,
    photoTwoRef,
    photoFourRef,
  ];

  useGsapShutterOpen(shutterOneRef, 0.75, heroRef);
  useGsapShutterOpen(shutterTwoRef, 0, heroRef);

  useGsapPhotoDropping(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="marine">
        Marine <span ref={shutterOneRef}></span>
      </h1>

      <h1 className="technique">
        Technique<span ref={shutterTwoRef}></span>
      </h1>

      <div className="photos">
        <div
          ref={photoOneRef}
          className="photo one"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4141741/pexels-photo-4141741.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        ></div>
        <div
          ref={photoTwoRef}
          className="photo two"
          style={{
            backgroundImage:
              'url("https://www.naval-group.com/sites/default/files/styles/section_cta_page_1492_x_603_/public/2022-07/SETIS%20Innovation_S%C3%A9bastien%20Rousset_3%20Bis.jpg?h=5bf672e5&itok=hJ4noXjU")',
          }}
        ></div>
        <div
          ref={photoThreeRef}
          className="photo three"
          style={{
            backgroundImage:
              'url("https://marine-technics.com/wp-content/uploads/workshop-1024x1024.png")',
          }}
        ></div>
        <div
          ref={photoFourRef}
          className="photo four"
          style={{
            backgroundImage:
              'url("https://media.damen.com/h_1136,w_1584,c_fill,g_auto/q_auto,f_auto/DAMEN/Catalogue/Defence%20and%20Security/Submarine%20Rescue%20Vessels/damen-auxiliaries-submarine-rescue-vessels-stoker")',
          }}
        ></div>
        <div
          ref={photoFiveRef}
          className="photo five"
          style={{
            backgroundImage:
              'url("https://marine-technics.com/wp-content/uploads/parts-1024x1024.png")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
