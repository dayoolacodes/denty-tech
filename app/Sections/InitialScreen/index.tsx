"use client";
import anime from "animejs";
import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { PiToothLight } from "react-icons/pi";

type InitialScreenProps = {
  className?: React.ComponentProps<"div">["className"];
};

export const InitialScreen = ({ className }: InitialScreenProps) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const arrowAnim = anime
      .timeline({
        targets: ".arrow",
        easing: "easeInOutQuad",
      })
      .add({
        width: "67px",
        duration: 800,
        complete: () => {
          setShowText(true);
        },
      })
      .add(
        {
          rotate: "90deg",
          duration: 800,
        },
        1000
      )
      .add({ rotate: "0deg", duration: 800 })
      .add(
        {
          opacity: 0,
        },
        3500
      );

    const lastArrowAnim = anime
      .timeline({
        targets: ".last-arrow",
        easing: "easeInOutQuad",
      })
      .add({
        width: "67px",
        duration: 800,
        complete: () => {
          setShowText(true);
        },
      })
      .add(
        {
          rotate: "90deg",
          duration: 800,
        },
        1000
      )
      .add(
        {
          opacity: 0,
        },
        3500
      );

    const animation2 = anime
      .timeline({
        targets: ".first-arrow",
        easing: "easeInOutQuad",
      })
      .add(
        {
          rotate: "90deg",
          duration: 800,
        },
        1250
      )
      .add({ rotate: "0deg", duration: 800 });

    const animation3 = anime
      .timeline({
        targets: ".first-row",
        easing: "easeInOutQuad",
      })
      .add(
        {
          translateY: 50,
          duration: 1000,
        },
        1200
      )
      .add(
        {
          translateX: 80,
          duration: 1000,
        },
        3000
      )
      .add({ opacity: 0 }, 3500);

    const animation4 = anime
      .timeline({
        targets: ".sec-row",
        easing: "easeInOutQuad",
      })
      .add(
        {
          translateY: -30,
          duration: 1000,
        },
        1200
      )
      .add(
        {
          translateX: -73.8,
          duration: 1000,
        },
        3000
      );

    const animation5 = anime
      .timeline({
        targets: ".logo",
        easing: "easeInOutQuad",
      })
      .add(
        {
          opacity: 1,
          translateY: -70,
          duration: 500,
        },
        4500
      );

    const animation6 = anime
      .timeline({
        targets: ".pitooth",
        easing: "easeInOutQuad",
      })
      .add(
        {
          translateX: -50,
          duration: 1000,
        },
        3500
      )
      .add(
        {
          translateY: -35,
          duration: 500,
        },
        4590
      );

    return () => {
      arrowAnim.pause();
      arrowAnim.restart();
      lastArrowAnim.pause();
      lastArrowAnim.restart();
      animation2.pause();
      animation2.restart();
      animation3.pause();
      animation3.restart();
      animation4.pause();
      animation4.restart();
      animation5.pause();
      animation5.restart();
      animation6.pause();
      animation6.restart();
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen min-w-full bg-[#FFFCF0] z-[10000] absolute ${className}`}
    >
      <div className="">
        <div className="first-row flex items-center gap-3">
          <ArrowRight className="first-arrow" />
          <div
            className={`arrow ${
              showText ? "text-5xl" : "text-2xl"
            } w-[200px] h-[67px] uppercase bg-[#FF582B] rounded-full p-3  text-white border-[#F85A2D] overflow-hidden border-2 flex items-center justify-center`}
          >
            <span>{!showText ? "Dental" : <GoArrowRight />}</span>
          </div>
        </div>
        <div className="sec-row flex items-center gap-3  ml-44 mt-2">
          <div
            className={`last-arrow ${
              showText ? "text-5xl" : "text-2xl"
            } w-[200px] h-[67px] uppercase bg-white rounded-full p-3  text-[#FF582B] border-white overflow-hidden border-2 flex items-center justify-center`}
          >
            <span>{!showText ? "ASSISTANCE" : <GoArrowLeft />}</span>
          </div>
          <div className="pitooth border-solid border-[#F85A2D] border-2 bg-[#F85A2D] text-white rounded-full p-3 text-5xl">
            <PiToothLight />
          </div>
        </div>
      </div>
      <div className="text-[#F85A2D] text-5xl overflow-hidden relative w-full h-[80px] flex justify-center mt-[-70px]">
        <span className="logo absolute bottom-[-50px]"> DENTYTECH</span>
      </div>
    </div>
  );
};


type ArrowTypes = {
  className?: React.ComponentProps<"div">["className"];
};

const ArrowRight = ({ className }: ArrowTypes) => {
  return (
    <div
      className={`border-solid border-[#F85A2D] border-2 text-[#F85A2D] rounded-full p-3 text-5xl ${className}`}
    >
      <GoArrowRight />
    </div>
  );
};

