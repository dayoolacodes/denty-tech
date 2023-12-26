"use client";
import React, { useEffect } from "react";
import anime from "animejs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";

interface FooterProps {
delay?: number
}
export const Footer: React.FC<FooterProps> = ({
  delay = 5000,
}) => {
  useEffect(() => {
    const btmTextAnim = anime.timeline({
      targets: ".btm-txt",
      easing: "easeInOutQuad",
    });

    const dotAnim = anime.timeline({
      targets: ".dot",
      easing: "easeInOutQuad",
    });

    const socialIconAnim = anime.timeline({
      targets: ".social-icon",
      easing: "easeInOutQuad",
    });

    btmTextAnim.add(
      {
        opacity: [0, 1],
        scale: [0, 1],
        translateY: [70, 0],
        duration: 1000,
      },
      delay
    );

    dotAnim.add(
      {
        scale: [0, 1],
        translateX: [-5, 0],
      },
      delay
    );

    socialIconAnim.add(
      {
        rotate: {
          value: 360,
          duration: 1000,
          easing: "easeInOutQuad",
        },
        scale: [0, 1],
      },
      delay
    );

    return () => {
      btmTextAnim.pause();
      btmTextAnim.restart();
      dotAnim.pause();
      dotAnim.restart();
      socialIconAnim.pause();
      socialIconAnim.restart();
    };
  }, [delay]);

  return (
    <div className="absolute bottom-[10px] flex w-full justify-between items-center px-10 text-base normal-case">
      <div className="relative">
        <span className="dot w-[6px] h-[6px] inline-block absolute bg-[#F85A2D] rounded-full top-[-8px] left-[1px] shadow-inner" />
        <span className="btm-txt inline-block">Your Smile, Our Passion</span>
      </div>
      <div className="relative">
        <div className="flex justify-around py-5 text-lg absolute top-[-50px] min-w-[120px]">
          <button className="social-icon bg-yellow-50">
            <FaInstagram />
          </button>
          <button className="social-icon bg-yellow-50">
            <AiOutlineYoutube />
          </button>
          <button className="social-icon border-solid border-black border-[1px] rounded-md text-sm pt-1 px-1 cursor-pointer bg-yellow-50">
            <SlSocialFacebook />
          </button>
        </div>
        <span className="btm-txt inline-block">
          Best Start Up of {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};
