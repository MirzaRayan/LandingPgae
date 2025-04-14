import React, { useEffect } from "react";
import videoBg from "../images/landingPagevid.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

const LandingPage = () => {
  useGSAP(() => {
    // Heading and "COMING SOON"
    gsap.from(".h1", {
      opacity: 0,
      x: -100,
      delay: 2,
      stagger: 0.3,
      duration: 1,
    });
    
    gsap.from(".p", {
      opacity: 0,
      y: 50,
      delay: 1.1,
      duration: 1,
    });
    
    // About section scroll animation
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false, // Set to true for debugging
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
    
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false, // Set to true for debugging
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
    });
  }, []);
  
  return (
    <div className="relative w-full overflow-auto h-[200vh]">
      {/* Fixed Video Background */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover object-center z-0"
      ></video>
      
      {/* SECTION 1 - Dark blend */}
      <section
        id="section1"
        className="relative z-10 h-screen w-full flex flex-col items-center justify-center mix-blend-darken text-white text-center font-projectsHeading bg-black/60"
      >
        <p className="font-light text-2xl py-10 p">OUR NEW GAME IS</p>
        <h1 className="font-semibold uppercase md:text-9xl text-[80px] h1">
          COMING
        </h1>
        <h1 className="font-semibold uppercase md:text-9xl text-[80px] h1">
          SOON
        </h1>
      </section>
      
      {/* SECTION 2 - About the game */}
      <section
        id="section2"
        className="relative z-10 h-screen w-full flex items-center justify-center mix-blend-lighten text-black text-center font-projectsHeading bg-gradient-to-b from-white/80 via-white/60 to-white/50 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 about-title">
            About the Game
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-800 about-text">
            Dive into a thrilling universe where every decision shapes your
            destiny. Our new game brings immersive storytelling, fast-paced
            action, and breathtaking visuals together to deliver an
            unforgettable experience. Whether you're a casual player or a
            competitive pro, prepare to enter a world unlike anything you've
            seen before.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;