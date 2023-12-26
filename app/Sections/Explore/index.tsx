import React, { useEffect, useRef } from "react";
import { Footer } from "../Footer";
import { icons } from "../Revolutionizing";
import { VscHeart } from "react-icons/vsc";
import { BsArrowUpRight } from "react-icons/bs";
import anime from "animejs";

interface Image {
  src: string;
  alt: string;
  class: string;
  text: string;
}

const images: Image[] = [
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505464/pasteset_xvezpw.jpg",
    alt: "bright_smile",
    class: "",
    text: "Oral Health Assessment",
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505464/ladyninvasilign_l4kbj0.jpg",
    alt: "lady_smileinvasilign",
    class: "",
    text: "Dental Health Records",
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505464/four-brushes_nizkuv.avif",
    alt: "brushes",
    class: "",
    text: "Toothbrush Tracking",
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505465/tongueout_d3imre.jpg",
    alt: "tongueout",
    class: "",
    text: "Symptom Checker",
  },
];
const images2: Image[] = [
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505464/ladybraids_oaa5v0.jpg",
    alt: "bright_smile",
    class: "",
    text: "Teledentistry Consultations",
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505464/holdingfloss_oevomo.jpg",
    alt: "lady_smile2",
    class: "",
    text: "Oral Care Guides",
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505465/ladysmile_t0pctv.jpg",
    alt: "smile",
    class: "",
    text: "Appointment Scheduling",
  },
  {
    src: "https://res.cloudinary.com/diloifzua/image/upload/v1703505464/pastepress_mcqp6g.jpg",
    alt: "squeeze",
    class: "",
    text: "Medication Tracking",
  },
];

const Explore: React.FC = () => {
  const exploresect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textContainers = document.querySelectorAll(".explore-text");

    textContainers.forEach((textContainer, index) => {
      textContainer.innerHTML = textContainer.textContent!.replace(
        /\S/g,
        `<span style='overflow: hidden;display: inline-block;'><span style='display: inline-block;' class='letter-${index} translate-y-[100px]'>$&</span></span>`
      );
    });

    const exploresection = exploresect.current;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "exploresect") {
          const exploreSectAnim = anime.timeline({
            targets: "#exploresect",
            easing: "easeInOutQuad",
          });
          const imgdivAnim = anime.timeline({
            targets: ".imgdiv",
            easing: "easeInOutQuad",
          });
          const btnAnim = anime.timeline({
            targets: ".btn",
            easing: "easeInOutQuad",
          });
          const exploretextAnims = Array.from(
            document.querySelectorAll(".letter")
          ).map((_, index) =>
            anime.timeline({
              targets: `.letter-${index}`,
              easing: "easeInOutQuad",
            })
          );

          exploreSectAnim.add({
            opacity: [0, 1],
            duration: 800,
          });

          exploreSectAnim.complete = () => {
            exploretextAnims.forEach((exploretextAnim) => {
              exploretextAnim.add({
                opacity: [0, 1],
                translateY: [100, 0],
                delay: anime.stagger(50),
              });
            });

            imgdivAnim.add({
              opacity: [0, 1],
              rotateY: [-90, 0],
              duration: 1500,
            });

            btnAnim.add({
              opacity: [0, 1],
              scale: [0, 1],
              duration: 1500,
            });
          };

          if (exploresection) {
            observer.unobserve(exploresection);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (exploresection) {
      observer.observe(exploresection);
    }

    return () => {
      if (exploresection) {
        observer.unobserve(exploresection);
      }
    };
  }, []);

  const handleScroll = () => {
    const imgwrapscroll = document.querySelector(
      "#div-scroller"
    ) as HTMLElement;

    const imgwrapAnim = anime.timeline({
      targets: `.imagescol2`,
      easing: "easeInOutQuad",
      duration: 0,
    });

    imgwrapAnim.add({
      translateY: `${imgwrapscroll.scrollTop * 2}`,
    });
  };

  return (
    <div
      ref={exploresect}
      id="exploresect"
      className="my-[100px] w-full h-[100vh] flex items-center justify-center opacity-0"
    >
      <div className="w-[50%] h-full flex justify-center items-center  relative">
        <div className="relative text-[3.5em] w-full flex flex-col gap-10 justify-center overflow-hidden p-20">
          <div className="flex gap-2">
            {icons.map(({ icon }, index) => {
              return (
                <span
                  className="spinIcon bg-[#DDEAF8] rounded-full text-[24px] p-1 text-[#F85A2D]"
                  key={index}
                >
                  {icon}
                </span>
              );
            })}
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="explore-text max-w-[550px] whitespace-nowrap my-[-10px]">
              EXPLORE OUR
            </div>
            <div className="explore-text max-w-[550px] whitespace-nowrap my-[-10px]">
              SERVICE, MAKE
            </div>
            <div className="explore-text max-w-[550px] whitespace-nowrap my-[-10px]">
              YOUR SMILE SHINE
            </div>
          </div>
          <div className="btn-wrap text-base flex gap-5 items-center">
            <button className="btn bg-[#F85A2D] text-white px-8 py-3 rounded-full scale-0 opacity-0">
              Get The App
            </button>
            <button className="btn border-solid border-[1px] border-black rounded-full px-6 py-2 scale-0 opacity-0">
              Meet The Team
            </button>
          </div>
        </div>
        <Footer />
      </div>
      <div
        onScroll={handleScroll}
        id="div-scroller"
        className="w-[50%] h-[100vh] flex justify-center gap-8 overflow-auto relative no-scrollbar "
      >
        <div className="imagescol absolute left-28">
          <div className="relative min-w-[300px] h-[400px]">
            {images.map((image, index) => (
              <div key={index} className="imgdiv w-full h-full my-6 opacity-0">
                <div
                  className={` bg-cover bg-no-repeat bg-center absolute bg-[#e0e0e0] w-full h-full rounded-[25px] ${image.class}`}
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute h-[50px] top-[20px] right-[10px] flex items-center gap-2 opacity-[0.9]">
                      <span className="rounded-full text-3xl text-gray-600 bg-white p-2 ">
                        <VscHeart />
                      </span>
                      <span className="rounded-full text-2xl p-2 text-gray-600 bg-white">
                        <BsArrowUpRight />
                      </span>
                    </div>
                    <div className="absolute w-full h-[50px] bottom-[10px] flex justify-center items-center">
                      <span className="rounded-full font-bold text-xl text-white px-[20px] py-2 border-solid border-[1px] border-white opacity-[0.9]">
                        {image.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            height: "calc(100vh + 750px * 2)",
          }}
          className="absolute -top-[750px] left-[450px] overflow-hidden h-[2200px]"
        >
          <div className="imagescol2 ">
            <div className="relative min-w-[300px] h-[400px]">
              {images2.map((image, index) => (
                <div
                  key={index}
                  className="imgdiv w-full h-full my-6 opacity-0"
                >
                  <div
                    className={`bg-cover bg-no-repeat bg-center absolute bg-[#e0e0e0] w-full h-full rounded-[25px] ${image.class}`}
                    style={{
                      backgroundImage: `url(${image.src})`,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute h-[50px] top-[20px] right-[10px] flex items-center gap-2 opacity-[0.9]">
                        <span className="rounded-full text-3xl text-gray-600 bg-white p-2 ">
                          <VscHeart />
                        </span>
                        <span className="rounded-full text-2xl p-2 text-gray-600 bg-white">
                          <BsArrowUpRight />
                        </span>
                      </div>
                      <div className="absolute w-full h-[50px] bottom-[10px] flex justify-center items-center">
                        <span className="rounded-full font-bold text-xl text-white px-[20px] py-2 border-solid border-[1px] border-white opacity-[0.9]">
                          {image.text}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
