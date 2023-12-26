"use client";
import React, { useEffect } from "react";
import { PiToothLight } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import anime from "animejs";

const Nav = () => {
  useEffect(() => {
    const navWrapperAnim = anime.timeline({
      targets: ".nav-container",
      easing: "easeInOutQuad",
    });
    navWrapperAnim.add({
      opacity: [0, 1],
      duration: 800,
    });

    const menuAnim = anime
      .timeline({
        targets: ".menu-btn",
        easing: "easeInOutQuad",
      })
      .add(
        {
          opacity: [0, 1],
          translateY: [-50, 5],
          scale: [0.7, 1],
          duration: 1000,
        }
      );

    const logoAnim = anime
      .timeline({
        targets: ".menu-logo",
        easing: "easeInOutQuad",
      })
      .add(
        {
          scale: [0, 1],
          duration: 1000,
        }
      );

    const dentyWrapAnim = anime
      .timeline({
        targets: ".dentytech-wrap",
        easing: "easeInOutQuad",
      })
      .add(
        {
          width: [0, 100],
          duration: 500,
        },
        1000
      );

    const dentyAnim = anime
      .timeline({
        targets: ".dentytech",
        easing: "easeInOutQuad",
      })
      .add(
        {
          translateX: [-75, 8],
          duration: 500,
        },
        1000
      );

    return () => {
      menuAnim.pause();
      menuAnim.restart();
      logoAnim.pause();
      logoAnim.restart();
      dentyWrapAnim.pause();
      dentyWrapAnim.restart();
      dentyAnim.pause();
      dentyAnim.restart();
    };
  }, []);

  return (
    <nav className="nav-container flex justify-between p-5 bg-transparent fixed top-0 w-full z-[999] h-[60px] opacity-0">
      <div className="menu-btn flex items-center">
        <button className="border-[1px] border-solid p-2 border-black rounded-full min-w-[80px] flex justify-center">
          Menu
        </button>
        <button className="border-[1px] border-solid p-2 border-black rounded-full text-lg">
          <CgMenuRight />
        </button>
      </div>
      <div className="flex items-center">
        <span className="menu-logo border-solid shadow-inner border-[#F85A2D] border-2 bg-[#F85A2D] text-orange-200 rounded-full text-2xl">
          <PiToothLight />
        </span>
        <span className="dentytech-wrap w-0 inline-flex overflow-hidden relative h-8 items-center">
          <span className="dentytech absolute">DENTYTECH</span>
        </span>
      </div>
      <div className="menu-btn flex items-center">
        <button className="border-[1px] border-solid p-2 border-black rounded-full min-w-[80px] flex justify-center">
          Log In
        </button>
        <button className="p-2 rounded-full min-w-[80px] flex justify-center bg-[#F85A2D] text-white border-solid border-[#F85A2D] border-2">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
