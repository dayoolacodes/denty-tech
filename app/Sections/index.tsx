"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import { InitialScreen } from "./InitialScreen";
import Nav from "./Nav";
import Hero from "./Hero";
import Revolutionizing from "./Revolutionizing";
import Explore from "./Explore";


const Sections = () => {
  const [initScreenActive, setInitScreenActive] = useState(true);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const body = document.querySelector("body");
    if (initScreenActive) {
      body!.style.overflow = "hidden";
      body!.style.overscrollBehavior = "contain";
    } else {
      body!.style.overflow = "unset";
    }
  }, [initScreenActive]);

  useEffect(() => {
    const initialScreenElement = document.querySelector(".initial-screen");

    const initialScreenAnim = anime
      .timeline({
        targets: ".initial-screen",
        easing: "easeInOutQuad",
        complete: () => {
          anime.set(initialScreenElement, {
            display: "none",
          });
          setInitScreenActive(false);
        },
      })
      .add(
        {
          opacity: 0,
        },
        6000
      );

    return () => {
      initialScreenAnim.pause();
      initialScreenAnim.restart();
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth && windowWidth < 1024) {
    return (
      <div className="w-full h-screen grid place-items-center">
        Mobile version not available atm. Try on a larger screen!
      </div>
    );
  }

  return (
    <div className="">
      {initScreenActive ? (
        <InitialScreen className="initial-screen" />
      ) : (
        <div className="other-sections no-scrollbar h-[100px]">
          <Nav />
          <Hero />
          <Revolutionizing />
          <Explore />
        </div>
      )}
    </div>
  );
};

export default Sections;
