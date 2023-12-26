"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { GoArrowDown } from "react-icons/go";
import { Footer } from "../Footer";
import { GoGear } from "react-icons/go";
import { PiHandTap } from "react-icons/pi";
import { BiNetworkChart } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";

const images = [
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1700260559/cld-sample.jpg",
    alt: "bright_smile",
    class: "",
    text: "Personalized Care",
    icon: <BsPersonBoundingBox />,
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703121697/ladysmile2_crge20.jpg",
    alt: "lady_smile2",
    class: "",
    text: "Modern Solutions",
    icon: <BiNetworkChart />,
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703121682/malesmile_lowskh.jpg",
    alt: "man_smile",
    class: "",
    text: "Convenience",
    icon: <PiHandTap />,
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703118433/ladysmile_psgk44.jpg",
    alt: "lady_smile",
    class: "",
    text: "Advanced Technology",
    icon: <GoGear />,
  },
];

export const Hero = () => {
  useEffect(() => {
    const text = document.querySelector(".adv-text-anim");
    text!.innerHTML = text!.textContent!.replace(
      /\S/g,
      "<span style='display:inline-block' class='letter'>$&</span>"
    );

    const heroAnim = anime.timeline({
      targets: ".sect-container",
      easing: "easeInOutQuad",
    });

    const advanAnim = anime.timeline({
      targets: ".letter",
      easing: "easeInOutQuad",
      delay: anime.stagger(50),
    });

    const picWrapperAnim = anime.timeline({
      targets: ".pics-wrapper",
      easing: "easeInOutQuad",
    });

    images.forEach((_, index) => {
      const imageAnim = anime.timeline({
        targets: `.img-${index}`,
        easing: "easeInOutQuad",
        delay: 1000,
      });

      imageAnim.add({
        rotate: `-${8 * (images.length - index - 1)}deg`,
      });
    });

    heroAnim.add({
      opacity: [0, 1],
      duration: 800,
    });

    advanAnim.add({
      translateY: [250, 0],
      duration: 500,
    });

    picWrapperAnim.add({
      translateY: [250, 0],
      opacity: [0, 1],
      rotate: ["-25deg", "0deg"],
      duration: 1500,
    });

    return () => {
      advanAnim.pause();
      advanAnim.restart();
      heroAnim.pause();
      heroAnim.restart();
      picWrapperAnim.pause();
      picWrapperAnim.restart();
    };
  }, []);

  const handleScroll = () => {
    const imgscroll = document.querySelector("#imgscroll") as Element;

    const img3Anim = anime.timeline({
      targets: `.img-3`,
      easing: "easeInOutQuad",
      duration: 0,
    });
    const img3WrapAnim = anime.timeline({
      targets: `.img-wrap-3`,
      easing: "easeInOutQuad",
      duration: 0,
    });
    const img2Anim = anime.timeline({
      targets: `.img-2`,
      easing: "easeInOutQuad",
      duration: 0,
    });
    const img2WrapAnim = anime.timeline({
      targets: `.img-wrap-2`,
      easing: "easeInOutQuad",
      duration: 0,
    });
    const img1Anim = anime.timeline({
      targets: `.img-1`,
      easing: "easeInOutQuad",
      duration: 0,
    });
    const img1WrapAnim = anime.timeline({
      targets: `.img-wrap-1`,
      easing: "easeInOutQuad",
      duration: 0,
    });
    const img0Anim = anime.timeline({
      targets: `.img-0`,
      easing: "easeInOutQuad",
      duration: 0,
    });
    const img0WrapAnim = anime.timeline({
      targets: `.img-wrap-0`,
      easing: "easeInOutQuad",
      duration: 0,
    });

    if (imgscroll.scrollTop >= 0) {
      img3WrapAnim.add({
        translateY: `-${imgscroll.scrollTop}`,
      });

      img3Anim.add({
        rotate: [`-${8 * (images.length - 4)}deg`, "-20deg"],
      });
    }

    if (imgscroll.scrollTop === 0) {
      img3Anim.add({
        rotate: 0,
      });
    }
    if (imgscroll.scrollTop > 700) {
      img2Anim.add({
        rotate: [`-${8 * (images.length - 3)}deg`, "-20deg"],
      });
      img2WrapAnim.add({
        translateY: `-${imgscroll.scrollTop - 700}px`,
      });
    }

    if (imgscroll.scrollTop < 700) {
      img2Anim.add({
        rotate: `-${8 * (images.length - 3)}deg`,
      });
      img2WrapAnim.add({
        translateY: 0,
      });
    }

    if (imgscroll.scrollTop >= 700 * 2) {
      img1Anim.add({
        rotate: [`-${8 * (images.length - 2)}deg`, "-25deg"],
      });
      img1WrapAnim.add({
        translateY: `-${imgscroll.scrollTop - 700 * 2}`,
      });
    }
    if (imgscroll.scrollTop <= 700 * 2 && imgscroll.scrollTop > 700) {
      img1Anim.add({
        rotate: `-${8 * (images.length - 2)}deg`,
      });
      img1WrapAnim.add({
        translateY: 0,
      });
    }

    if (imgscroll.scrollTop >= 700 * 3) {
      img0Anim.add({
        rotate: [`-${8 * (images.length - 1)}deg`, "-30deg"],
      });

      img0WrapAnim.add({
        translateY: `-${imgscroll.scrollTop - 700 * 3}`,
      });
    }

    if (imgscroll.scrollTop <= 700 * 3 && imgscroll.scrollTop > 700 * 2) {
      img0Anim.add({
        rotate: `-${8 * (images.length - 1)}deg`,
      });
      img0WrapAnim.add({
        translateY: 0,
      });
    }
  };

  return (
    <div className="sect-container w-full min-h-[100vh] flex flex-col items-center justify-center relative opacity-0 overflow-auto">
      <div className="relative text-[10em] w-full flex justify-center items-start overflow-hidden">
        <div className="adv-text-anim">OUR ADVANTAGES</div>
      </div>
      <div
        onScroll={handleScroll}
        id="imgscroll"
        className="h-[calc(100vh/1.8)] overflow-auto absolute w-full no-scrollbar"
      >
        <div className="h-[3500px] w-full relative" />
      </div>

      <div className="image-container">
        <div className="pics-wrapper relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`img-wrap-${index} absolute w-full h-full`}
            >
              <div
                className={`img-${index} bg-cover bg-no-repeat bg-center absolute shadow-md bg-[#e0e0e0] w-full h-full rounded-[45px] ${image.class}`}
                style={{
                  backgroundImage: `url(${image.src})`,
                }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute w-full h-[50px] bottom-[50px] flex justify-center items-center">
                    <span className="bg-white p-3 rounded-full font-bold text-2xl">
                      {image.icon}
                    </span>
                    <span className="bg-white p-3 rounded-full font-bold text-xl px-[20px]">
                      {image.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-full bottom-[0px] h-[70px] flex justify-center overflow-hidden z-[-1]">
        <div className="border-solid border-black border-[1px] rounded-[100%] h-[100px] w-[100px] pt-5 flex items-start justify-center text-4xl translate-y-7">
          <GoArrowDown className="arrow-down bounce" />
        </div>
      </div>
      <Footer delay={1000} />
    </div>
  );
};

export default Hero;
