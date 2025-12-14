import React from "react";
import { Icon } from "@iconify/react";
import Profile from "../images/profile3.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <section
      id="home"
      className="home-section flex items-center justify-between px-20 pt-[100px]"
    >
      <div className="intro-wrapper">
        <button className="intro-btn">GICHEZ D MAN</button>
        <h1 className="text-3xl mb-2">
          Hello, I'm <strong className="strong uppercase">Gichure Maina</strong>
        </h1>
        <h2 className="text-2xl mb-2 flex">
          And I am a <span className="animated-text"></span>
        </h2>
        <h3 className="text-xl mb-2">
          Learn More, <strong className="strong">Discover More!</strong>
        </h3>
        <p className="mb-2">
          Coding is more than just writing lines of code; it's crafting the
          future with your fingertips.
        </p>
        <p className="mb-2">
          Every bug you fix, every function you create, and every problem you
          solve is a step closer to turning imagination into reality.
        </p>
        <div className="social-media-icons flex gap-[25px] mt-[20px] mb-[20px]">
          <a href="/instagram" className="icon">
            <Icon icon="mdi:instagram" width={30} height={30} />
          </a>
          <a href="/facebook" className="icon">
            <Icon icon="mdi:facebook" width={30} height={30} />
          </a>
          <a href="/twitter" className="icon">
            <Icon icon="mdi:twitter" width={30} height={30} />
          </a>
          <a href="/github" className="icon">
            <Icon icon="mdi:github" width={30} height={30} />
          </a>
        </div>
        <button className="call-to-action flex gap-[5px]" type="button">
          Get In Touch
          <Icon icon="solar:arrow-right-linear" width="24" height="24" />
        </button>
      </div>
      <div className="image-wrapper w-[600px]">
        <img src={Profile} alt="profile_image" />
      </div>
    </section>
  );
};

export default Home;
