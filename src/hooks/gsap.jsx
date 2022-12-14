import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterOpen = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 2,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapLeftToRightStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: "-100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: Expo.easeInOut,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapRightToLeftStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: "100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: Expo.easeInOut,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapDownStager = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vw",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: Expo.easeInOut,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapPhotoDropping = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        delay: 2.75,
        stagger: 0.2,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useGsapPhotoLevitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-35%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapAboutUs = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "-100wh",
      },
      {
        y: 0,
        duration: 1,
        rotate: "360deg",
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useGsapAboutLeftShutterOpen = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        delay: 1.2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapAboutRightShutterOpen = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        widows: "100%",
      },
      {
        width: 0,
        duration: 2,
        delay: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
