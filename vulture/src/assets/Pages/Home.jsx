import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar/Navbar";
import { Icon } from "@iconify/react";
import ProfileA from "../images/Profile.png";
import ProfileB from "../images/profile3.png";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Experience.css";
import "../styles/Projects.css";
import "../styles/Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Animation On Scroll Effect
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-sine",
    });
  }, []);

  // Set current year for footer
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

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
            <a href="https://www.instagram.com" className="icon">
              <Icon icon="mdi:instagram" width={30} height={30} />
            </a>
            <a href="https://www.youtube.com/@gichezdman" className="icon">
              <Icon icon="mdi:youtube" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/in/gichure-maina-a45aab202/" className="icon">
              <Icon icon="mdi:linkedin" width={30} height={30} />
            </a>
            <a href="https://github.com/KyleGichez" className="icon">
              <Icon icon="mdi:github" width={30} height={30} />
            </a>
          </div>
          <button className="call-to-action flex gap-[5px]" type="button">
            Get In Touch
            <Icon icon="solar:arrow-right-linear" width="24" height="24" />
          </button>
        </div>
        <div className="image-wrapper w-[700px]">
          <img src={ProfileA} alt="profile_imageA" className="w-[100%] h-[auto]" />
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
              <img src={ProfileB} alt="profile_imageB" className="w-[100%] h-[auto]" />
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
                  <p> TikTok Audience </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-education mb-[10px]" data-aos="fade-up">
            <h2 className="text-2xl bold mb-[20px] uppercase flex items-center gap-[10px]">
              <span>
                <Icon icon="tdesign:education-filled" width="24" height="24" />
              </span>
              Education Background
            </h2>
            <div className="education-wrapper">
              <div className="university-education flex justify-between mb-[20px]">
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
              <div className="secondary-education flex justify-between mb-[20px]">
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
              <div className="primary-education flex justify-between mb-[20px]">
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
      <section id="experience" className="experience-section py-[100px] px-20">
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
          <div
            className="job-experience flex justify-between gap-[50px] mb-[30px]"
            data-aos="fade-up"
          >
            <div className="company-name w-[500px]">
              <h2 className="text-xl bold uppercase mb-[20px] flex gap-[10px]">
                <span>
                  <Icon
                    icon="material-symbols-light:home-work-rounded"
                    width="24"
                    height="24"
                  />
                </span>
                Samis Software Limited
              </h2>
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
              <h2 className="text-xl bold uppercase mb-[20px]">
                Software Engineer
              </h2>
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
          <div className="tutorials-wrapper mb-[30px]" data-aos="fade-up">
            <h2 className="text-2xl uppercase flex items-center gap-[10px] mb-[20px]">
              <span>
                <Icon icon="entypo:laptop" width="24" height="24" />
              </span>
              Coding Tutorials
            </h2>
            <div className="tutorials-content flex justify-between gap-[10px]">
              <div className="coding-tutorial">
                <div className="youtube-video">
                  <iframe
                    width=""
                    height=""
                    src="https://www.youtube.com/embed/2R7oc1L4i-k?si=7yqFd_6UsNuskesp"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <p className="pt-1">How Different HTML Elements Display On The Web Browser</p>
                </div>
              </div>
              <div className="coding-tutorial">
                <div className="youtube-video">
                  <iframe
                    width=""
                    height=""
                    src="https://www.youtube.com/embed/czANALfb0SU?si=UeQ4Np-3KymhAerD"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <p className="pt-1">Introduction To Software Development</p>
                </div>
              </div>
              <div className="coding-tutorial">
                <div className="youtube-video">
                  <iframe
                    width=""
                    height=""
                    src="https://www.youtube.com/embed/cFU2fkAX0RY?si=WcvkXeA6SPCk0jLg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <p className="pt-1">Introduction to HTML5 For The Web</p>
                </div>
              </div>
              <div className="coding-tutorial">
                <div className="youtube-video">
                  <iframe
                    width=""
                    height=""
                    src="https://www.youtube.com/embed/czANALfb0SU?si=UeQ4Np-3KymhAerD"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <p className="pt-1">Frontend Vs Backend Software Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-[100px] px-20">
        <h1
          className="text-3xl uppercase mb-[100px] flex items-center gap-[10px] justify-center"
          data-aos="zoom-in"
        >
          <span>
            <Icon icon="heroicons:phone-20-solid" width="48" height="48" />
          </span>
          Contact Me
        </h1>
        <div className="contact-form" data-aos="fade-up">
          <form action={""} method="POST" className="flex flex-col gap-[20px]">
            <legend className="text-xl bold uppercase">Get In Touch: </legend>
            <div className="flex gap-[20px]">
              <div className="form-input flex flex-col gap-[10px] w-[100%] mb-[10px]">
                <label htmlFor="Fname">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>
              <div className="form-input flex flex-col gap-[10px] w-[100%] mb-[10px]">
                <label htmlFor="Lname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-input flex flex-col gap-[10px] w-[100%] mb-[10px]">
              <label htmlFor="Lname">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-text-area flex flex-col gap-[10px] mb-[20px]">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="33"
                placeholder="Write your text message here!"
              ></textarea>
            </div>
            <div className="submit-btn flex justify-center">
              <button type="button"> Submit </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer flex justify-between px-20 py-[20px]" role="contentinfo">
        <p>Coding Is Art.</p>
        <p>Copyright &copy; <span>{getCurrentYear()}</span> All Rights Reserved.</p>
        <p>Developed by Gichure Maina.</p>
      </footer>
    </>
  );
};

export default Home;
