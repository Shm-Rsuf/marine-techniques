import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnvail,
  useGsapFeatureRightShutterUnvail,
} from "../hooks/gsap";
const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftShutter = useRef(null);
  const featureRightShutter = useRef(null);

  useGsapFeatureLeftShutterUnvail(featureLeftShutter, featureRef);
  useGsapFeatureRightShutterUnvail(featureRightShutter, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title heading-text">featured</h2>
      <div className="features">
        <div className="feature-left">
          <span className="feature-text">feature-left</span>
          <img
            src="https://marine-technics.com/wp-content/uploads/workshop-1024x1024.png"
            alt="feature-left"
          />
          <span
            className="feature-shutter-left"
            ref={featureLeftShutter}
          ></span>
        </div>
        <div className="feature-right">
          <span className="feature-text">feature right</span>
          <img
            src="https://marine-technics.com/wp-content/uploads/parts-1024x1024.png"
            alt="feature-right"
          />
          <span
            className="feature-shutter-right"
            ref={featureRightShutter}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
