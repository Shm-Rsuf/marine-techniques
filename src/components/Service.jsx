import { useRef } from "react";
import {
  useGsapServiceLeftShutterOpen,
  useGsapServiceRightShutterOpen,
} from "../hooks/gsap";

const Service = () => {
  const serviceRef = useRef(null);
  const serviceLeftShutter = useRef(null);
  const serviceRightShutter = useRef(null);

  useGsapServiceLeftShutterOpen(serviceLeftShutter, serviceRef);
  useGsapServiceRightShutterOpen(serviceRightShutter, serviceRef);

  return (
    <section className="service wrapper " ref={serviceRef}>
      <h2 className="section-title heading-text">service</h2>

      <div className="services">
        <div className="service-left">
          <div className="service-text">
            <h1>Our Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque illum vel iure quibusdam eos? Consequatur officia enim
              harum cumque dicta, quo est modi quaerat autem, labore doloribus
              aperiam nihil molestias.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              inventore obcaecati. In, earum provident voluptate, architecto
              eveniet placeat debitis voluptatibus eos voluptates totam, aperiam
              laborum velit reprehenderit delectus commodi quis!
            </p>
          </div>
          <div className="service-img">
            <img
              src="https://marine-technics.com/wp-content/uploads/workshop-1024x1024.png"
              alt=""
            />
          </div>
          <span
            className="service-shutter-left"
            ref={serviceLeftShutter}
          ></span>
        </div>
        <div className="service-right">
          <div className="service-img">
            <img
              src="https://marine-technics.com/wp-content/uploads/workshop-1024x1024.png"
              alt=""
            />
          </div>

          <div className="service-text">
            <h1>Our Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque illum vel iure quibusdam eos? Consequatur officia enim
              harum cumque dicta, quo est modi quaerat autem, labore doloribus
              aperiam nihil molestias.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              inventore obcaecati. In, earum provident voluptate, architecto
              eveniet placeat debitis voluptatibus eos voluptates totam, aperiam
              laborum velit reprehenderit delectus commodi quis!
            </p>
          </div>
          <span
            className="service-shutter-right"
            ref={serviceRightShutter}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Service;
