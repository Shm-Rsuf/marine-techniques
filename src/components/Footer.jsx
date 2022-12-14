import { useRef } from "react";
import { useGsapFooterHeading } from "../hooks/gsap";
const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadingRef = useRef(null);

  useGsapFooterHeading(footerHeadingRef, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadingRef}>Footer</h1>
      <p>© {new Date().getFullYear()} Immemorial. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;
