import React from "react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import ProfileA from "../images/profile2.png";
import ProfileB from "../images/profile3.png";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="home-section flex items-center justify-between px-20 py-[100px]"
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
        <div className="image-wrapper w-[700px]">
          <img src={ProfileA} alt="profile_imageA" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-[100px] px-20">
        <h1
          className="text-3xl uppercase flex items-center justify-center gap-[10px]"
          data-aos="zoom-in"
        >
          <span>
            <Icon icon="arcticons:goabout" width="48" height="48" />
          </span>
          About Me
        </h1>
        <div className="about-wrapper">
          <div className="about-me-wrapper flex justify-between items-center gap-[25px] mb-[20px]">
            <div
              className="about-me-image w-[1500px] px-[5px]"
              data-aos="fade-right"
            >
              <img src={ProfileB} alt="profile_imageB" />
            </div>
            <div className="about-me-text" data-aos="fade-up">
              <p>
                With over 5 years of experience in the software engineering
                industry, I have contributed largely to the E-commerce sector
                through building web applications which enables the sellers to
                sell their preffered products online to potential customers.
                This has enabled to bridge the gap between the buyer and the
                seller hence driving more sales to the business.{" "}
              </p>
              <br />
              <p>
                During my leisure time I create educative and impactful coding
                content teaching web development. Through Youtube and Tiktok, I
                have gathered an online audience that engages with my tutorials
                regularly and this is also one of the jobs I do;{" "}
                <span className="strong">Coding Tutor</span>.
              </p>
              <br />
              <div className="stat-cards flex justify-between mt-[20px]">
                <div className="stat-card text-center">
                  <p className="text-xl bold pb-2"> 10 + </p>
                  <p>Coding Certifications </p>
                </div>
                <div className="stat-card text-center">
                  <p className="text-xl bold pb-2">5 + </p>
                  <p> Years Of Experience </p>
                </div>
                <div className="stat-card text-center">
                  <p className="text-xl bold pb-2">1000 + </p>
                  <p> Live Audience </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-education mb-[10px]" data-aos="fade-up">
            <h2 className="text-2xl bold mb-[20px] uppercase flex items-center gap-[10px]">
              <span>
                <Icon icon="tdesign:education-filled" width="24" height="24" />
              </span>
              Education
            </h2>
            <div className="education-wrapper">
              <div className="university-education flex gap-[350px] mb-[20px]">
                <div>
                  <p className="mb-[10px] flex items-center gap-[10px]">
                    <span>
                      <Icon
                        icon="material-symbols-light:home-work-rounded"
                        width="24"
                        height="24"
                      />
                    </span>
                    The Co-operative University Of Kenya
                  </p>
                  <p className="mb-[20px] flex items-center gap-[10px]">
                    <span>
                      <Icon
                        icon="clarity:certificate-solid"
                        width="24"
                        height="24"
                      />
                    </span>
                    Bachelor Of Science In Information Technology
                  </p>
                </div>
                <div>
                  <p className="mb-[10px]">2019 - 2023</p>
                  <p className="mb-[20px]">Full Time</p>
                </div>
              </div>
              <div className="secondary-education flex gap-[400px] mb-[20px]">
                <div>
                  <p className="mb-[10px] flex items-center gap-[10px]">
                    <span>
                      <Icon
                        icon="material-symbols-light:home-work-rounded"
                        width="24"
                        height="24"
                      />
                    </span>
                    Nyandarua High School
                  </p>
                  <p className="mb-[20px] flex items-center gap-[10px]">
                    <span>
                      <Icon
                        icon="clarity:certificate-solid"
                        width="24"
                        height="24"
                      />
                    </span>
                    Kenya Certificate Of Secondary Education
                  </p>
                </div>
                <div>
                  <p className="mb-[10px]">2015 - 2018</p>
                  <p className="mb-[20px]">Full Time</p>
                </div>
              </div>
              <div className="primary-education flex gap-[420px] mb-[20px]">
                <div>
                  <p className="mb-[10px] flex items-center gap-[10px]">
                    <span>
                      <Icon
                        icon="material-symbols-light:home-work-rounded"
                        width="24"
                        height="24"
                      />
                    </span>
                    Roots Academy
                  </p>
                  <p className="mb-[20px] flex items-center gap-[10px]">
                    <span>
                      <Icon
                        icon="clarity:certificate-solid"
                        width="24"
                        height="24"
                      />
                    </span>
                    Kenya Certificate Of Primary Education
                  </p>
                </div>
                <div>
                  <p className="mb-[10px]">2007 - 2014</p>
                  <p className="mb-[20px]">Full Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className="experience-section py-[100px] px-20 h-[100vh]"
      >
        <h1
          className="text-3xl uppercase mb-[100px] flex items-center gap-[10px] justify-center"
          data-aos="zoom-in"
        >
          <span>
            <Icon icon="ic:baseline-work" width="48" height="48" />
          </span>
          Work Experience
        </h1>
        <div className="experience-wrapper">
          <div className="job-experience flex gap-[50px]" data-aos="fade-up">
            <div className="company-name w-[500px]">
              <h3 className="text-xl bold uppercase mb-[20px] flex gap-[10px]">
                <span>
                  <Icon
                    icon="material-symbols-light:home-work-rounded"
                    width="24"
                    height="24"
                  />
                </span>
                Samis Software Limited
              </h3>
              <p className="mb-[20px] flex gap-[10px]">
                <span>
                  <Icon icon="healthicons:social-work" width="24" height="24" />
                </span>
                Nakuru, Kenya
              </p>
              <p className="mb-[20px] flex gap-[10px]">
                <span>
                  <Icon
                    icon="fluent-mdl2:calendar-work-week"
                    width="20"
                    height="20"
                  />
                </span>
                Nov 2023 - Aug 2024
              </p>
              <p className="mb-[20px] flex gap-[10px]">
                <span>
                  <Icon icon="ic:baseline-work" width="24" height="24" />
                </span>
                Full Time
              </p>
            </div>
            <div className="company-department">
              <h3 className="text-xl bold uppercase mb-[20px]">
                Software Developer
              </h3>
              <ul className="company-role">
                <li className="mb-[10px]">
                  Develop and maintain responsive user-friendly interfaces using
                  React.js, ensuring seamless user experiences across multiple
                  devices.
                </li>
                <li className="mb-[10px]">
                  Collaborate with Product manager, Backend developers, and
                  UI/UX designers to implement new features and enhance existing
                  ones.
                </li>
                <li className="mb-[10px]">
                  Optimize web applications for maximum speed and scalability,
                  contributing to improved perfomance and user satisfaction.
                </li>
                <li className="mb-[10px]">
                  Deploy live web applications to the cloud architecture for
                  hosting services on the company's web server.
                </li>
                <li className="mb-[10px]">
                  Participate in code reviews and provide feedback to enhance
                  code quality and maintainability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
