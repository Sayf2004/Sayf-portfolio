import "./first.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function First() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="first">
      {/* Left part */}
      <div className="left up">
        <div className="description">
          <h2 className="desTitle">Hello There,</h2>
          <p className="desPar">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            vero eligendi. Quo aspernatur, enim reiciendis eius labore cumque.
            Quo consectetur dolor perspiciatis, reprehenderit voluptatem
            quisquam omnis praesentium animi amet, unde officiis distinctio
            totam placeat temporibus fuga voluptas! Id facere dolores modi rerum
            sit cupiditate, hic inventore, nam nihil a debitis.
          </p>
        </div>
      </div>

      {/* Right Part */}
      <div className="right down">
        <div className="img">
          <img src="https://i.imgur.com/WW7r0p1.jpg" alt="Sayf's Pic" />
        </div>
      </div>

      {/* Social */}
      <div className="social">
        <span
          className="icon"
          data-aos-delay="400"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-mirror="true"
        >
          <FaFacebook size={24} />
        </span>
        <span
          data-aos-delay="800"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-mirror="true"
          className="icon"
        >
          <FaInstagram size={24} />
        </span>
        <span
          data-aos-delay="1200"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-mirror="true"
          className="icon"
        >
          <FaLinkedin size={24} />
        </span>
      </div>
    </div>
  );
}

export default First;
