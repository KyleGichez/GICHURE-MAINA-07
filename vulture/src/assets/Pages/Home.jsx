import React from "react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import ProfileA from "../images/profile2.png";
import ProfileB from "../images/profile3.png";
import "../styles/Home.css";
import "../styles/About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-sine'
    });
  }, []);

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="home-section flex items-center justify-between px-20 pt-[100px] h-[100vh]"
      >
        <div className="intro-wrapper">
          <button className="intro-btn">GICHEZ D MAN</button>
          <h1 className="text-3xl mb-2">
            Hello, I'm{" "}
            <strong className="strong uppercase">Gichure Maina</strong>
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
        <div className="image-wrapper w-[650px]">
          <img src={ProfileA} alt="profile_imageA" />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="about-section pt-[100px] h-[100vh] px-20">
        <h1 className="text-3xl text-center uppercase" data-aos='zoom-in'>About Me</h1>
        <div className="about-wrapper">
          <div className="about-me-wrapper flex justify-between items-center gap-[25px] mb-2">
            <div className="about-me-image w-[1300px] px-[5px]" data-aos='fade-right'>
              <img src={ProfileB} alt="profile_imageB" />
            </div>
            <div className="about-me-text" data-aos='fade-up'>
              <p>
                - With over 4 years of experience in the software engineering
                industry, I have contributed largely to the E-commerce sector
                through building web applications which enables the sellers to
                sell their preffered products online to potential customers.
                This has enabled to bridge the gap between the buyer and the
                seller hence driving more sales to the business.{" "}
              </p>
              <br />
              <p>
                - During my leisure time I love creating coding content for
                Youtube and Tiktok. Through Tiktok, I have gathered an online audience
                that engages with my tutorials regularly and this is also one of
                the jobs I do; <span className="strong">Coding Tutor</span>.
              </p>
              <div className='stat-cards'>
                <div></div>
              </div>
            </div>
          </div>
          <div className="key-technologies">
            <h3 className=''>Key Technologies I Use:</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
