"use client";
import React, { useEffect, useRef, useState } from "react";
import { Footer } from "../Footer";
import { PiAtom, PiHourglassSimpleMedium, PiToothLight } from "react-icons/pi";
import Image from "next/image";
import { FlowerPetals } from "@/assets";
import { IoMdPlay } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import anime from "animejs";


interface Icon {
  icon: React.ReactNode;
}

interface IconImage {
  imgurl: string;
}


export const icons: Icon[] = [
  {
    icon: <PiHourglassSimpleMedium />,
  },
  {
    icon: <PiToothLight />,
  },
  {
    icon: <PiAtom />,
  },
];

const iconimgs: IconImage[] = [
  {
    imgurl:
      "https://res.cloudinary.com/diloifzua/image/upload/v1703258813/joyful-african_fyhrbd.jpg",
  },
  {
    imgurl:
      "https://res.cloudinary.com/diloifzua/image/upload/v1703259031/smiling-girl_pjyrtz.jpg",
  },
  {
    imgurl:
      "https://res.cloudinary.com/diloifzua/image/upload/v1703259031/funny-pink-wall_pbnnj5.jpg",
  },
  {
    imgurl:
      "https://res.cloudinary.com/diloifzua/image/upload/v1703259030/busiensswoman_m6z9ql.jpg",
  },
];

const faceImg =
  "https://res.cloudinary.com/diloifzua/image/upload/v1703250396/img_unqxvt.jpg";
const ladiessmile =
  "https://res.cloudinary.com/diloifzua/image/upload/v1703257440/smileladies_1_v2cczj.jpg";

const Revolutionizing: React.FC = () => {
  const revolutRef = useRef<HTMLDivElement>(null);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const section = revolutRef.current;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target.id === "revolutionizeSection"
        ) {

          const revolutionizeContainerAnim = anime.timeline({
            targets: ".revolutionizeSection",
            easing: "easeInOutQuad",
          });
          const revolutTextAnim = anime.timeline({
            targets: ".revolutTextAnim",
            easing: "easeInOutQuad",
          });
          const revolutSpaceAnim = anime.timeline({
            targets: ".bttmtopleftanim",
            easing: "easeInOutQuad",
          });
          const modernsolAnim = anime.timeline({
            targets: ".modernsol",
            easing: "easeInOutQuad",
          });
          const modernTextAnim = anime.timeline({
            targets: ".modernText",
            easing: "easeInOutQuad",
          });
          const spinIconAnim = anime.timeline({
            targets: ".spinIcon",
            easing: "easeInOutQuad",
          });
          const dentalTextAnim = anime.timeline({
            targets: ".dentalText",
            easing: "easeInOutQuad",
          });

          const careTextAnim = anime.timeline({
            targets: ".careText",
            easing: "easeInOutQuad",
          });
          const assitanceTextAnim = anime.timeline({
            targets: ".assitanceText",
            easing: "easeInOutQuad",
          });
          const assitancetoothdivAnim = anime.timeline({
            targets: ".assitancetoothdiv",
            easing: "easeInOutQuad",
          });
          const faceImgWrapAnim = anime.timeline({
            targets: ".faceImgWrap",
            easing: "easeInOutQuad",
          });
          const petalsAnim = anime.timeline({
            targets: ".petals",
            easing: "easeInOutQuad",
          });
          const iconimgplusAnim = anime.timeline({
            targets: ".iconimgplus",
            easing: "easeInOutQuad",
          });
          const iconsimgwrapAnim = anime.timeline({
            targets: ".iconsimgwrap",
            easing: "easeInOutQuad",
          });
          const getstartedbtnAnim = anime.timeline({
            targets: ".get-started-btn",
            easing: "easeInOutQuad",
          });
          const ladiessmileAnim = anime.timeline({
            targets: ".ladiessmile",
            easing: "easeInOutQuad",
          });

          revolutionizeContainerAnim.add({
            opacity: [0, 1],
            duration: 800,
          });

          revolutionizeContainerAnim.complete = () => {
            setShowFooter(true);
            revolutSpaceAnim.add({
              translateY: "-100px",
            });

            dentalTextAnim
              .add({
                translateY: -100,
              })
              .add({
                translateX: 200,
              });

            careTextAnim
              .add({
                translateY: -100,
              })
              .add({
                translateX: 350,
              });

            assitancetoothdivAnim.add({
              opacity: 1,
              delay: 1000,
            });
            assitanceTextAnim.add({
              width: 200,
              delay: 1000,
            });

            modernsolAnim.add({
              opacity: 1,
              height: "100%",
              duration: 1500,
              delay: 1000,
            });

            modernTextAnim.add({
              translateY: -5,
              duration: 1500,
              delay: 1000,
            });

            faceImgWrapAnim.add({
              opacity: [0, 1],
              scale: [0, 1],
              delay: 1000,
            });

            petalsAnim.add({
              translateX: [-70, 0],
              delay: 1000,
            });

            revolutSpaceAnim.complete = () => {
              revolutTextAnim.add({
                translateX: "-100px",
              });

              revolutTextAnim.complete = () => {
                spinIconAnim.add({
                  rotate: {
                    value: 360,
                    easing: "easeInOutQuad",
                  },
                  scale: [0, 1],
                });
              };

              iconsimgwrapAnim.add({
                scale: [0, 1],
                opacity: 1,
              });
              iconimgs.forEach((_, index) => {
                const iconimgAnim = anime.timeline({
                  targets: `.iconimg-${index}`,
                  easing: "easeInOutQuad",
                });

                iconimgAnim.add({
                  translateX: `${30 * (iconimgs.length - index - 1)}`,
                  duration: 500,
                  delay: 2000,
                });
              });

              iconimgplusAnim.add({
                translateX: `${30 * (iconimgs.length + 1)}`,
                duration: 500,
                delay: 2000,
              });

              getstartedbtnAnim.add({
                opacity: [0, 1],
                scale: [0, 1],
              });

              ladiessmileAnim.add({
                opacity: [0, 1],
                scale: [0, 1],
              });
            };
          };
          if (section) {
            observer.unobserve(section);
          }
        } else {
          // anime({
          //   targets: section,
          //   translateY: "20px",
          //   opacity: 0,
          //   duration: 0,
          // });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="revolutionizeSection"
      ref={revolutRef}
      className="revolutionizeSection min-h-[100vh] flex flex-col justify-center items-center relative w-full uppercase text-9xl"
    >
      <div className="h-full w-full flex flex-col justify-center items-center gap-20 relative">
        <div className="w-full h-full flex justify-center items-center">
          <div className="revolutTextAnim relative w-[1000px] min-h-[120px] overflow-hidden ml-[100px]">
            <span className="bttmtopleftanim inline-block absolute -bottom-32">
              Revolutionizing
            </span>
          </div>
          <div className="modernsol h-0 opacity-0 -ml-24">
            <div className="flex gap-2">
              {icons.map(({ icon }, index) => {
                return (
                  <span
                    className="spinIcon bg-[#DDEAF8] rounded-full text-[14px] p-1 text-[#F85A2D]"
                    key={index}
                  >
                    {icon}
                  </span>
                );
              })}
            </div>
            <div className="modernText text-[16px] normal-case leading-7 mt-5 translate-y-14">
              Modern Solutions, <br /> Timeless Smiles
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
          <div className="relative w-[800px] h-[100px] flex items-center">
            <div className="assitancetoothdiv flex items-center absolute -left-16 opacity-0">
              <span className="assitanceText text-[#F85A2D] bg-[#DDEAF8] rounded-full px-8 py-3 text-3xl w-0 overflow-hidden">
                Assitance
              </span>
              <span className="inline-block bg-[#F85A2D] text-orange-100 rounded-full text-4xl p-2 ml-1">
                <PiToothLight />
              </span>
            </div>
            <span className="dentalText absolute left-0 -bottom-32">
              Dental
            </span>
          </div>

          <div className="relative w-[200px] h-[100px] flex items-center">
            <div className="faceImgWrap flex mx-5 absolute -left-56 opacity-0">
              <div
                style={{
                  backgroundImage: `url(${faceImg})`,
                }}
                className="h-[100px] w-[100px] rounded-full bg-cover bg-no-repeat bg-center z-[2]"
              />
              <div className="petals h-[100px] w-[100px] rounded-full ml-[-30px] z-[1] bg-[#DDEAF8] flex flex-col gap-3 justify-center items-center">
                <Image
                  src={FlowerPetals}
                  alt="flowers_petals"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <span className="careText absolute -bottom-32 -left-96">care</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="revolutTextAnim relative w-[1100px] min-h-[120px] overflow-y-hidden">
            <div className="bttmtopleftanim whitespace-nowrap absolute -bottom-32">
              with technology
            </div>
          </div>
          <div className="iconsimgwrap mt-5 isolate relative -ml-36 opacity-0">
            <div className="flex absolute w-[150px] h-[50px]">
              {iconimgs.map(({ imgurl }, index) => {
                return (
                  <div
                    key={imgurl + index}
                    style={{
                      backgroundImage: `url(${imgurl})`,
                      zIndex: index,
                    }}
                    className={`iconimg-${index} h-[50px] w-[50px] rounded-full bg-cover bg-no-repeat bg-center absolute`}
                  />
                );
              })}
              <button
                className={`iconimgplus absolute bg-[#DDEAF8] w-5 h-5 flex justify-center items-center rounded-full text-sm text-[#F85A2D] top-[15px] z-[-1]`}
              >
                <GoPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-[calc(100vw/2)] ">
          <div
            style={{
              backgroundImage: `url(${ladiessmile})`,
            }}
            className="ladiessmile absolute w-[240px] h-[140px] rounded-2xl -top-32 left-[-180px] bg-cover bg-no-repeat bg-center opacity-0"
          >
            <div className="w-full h-full relative">
              <button className="spinIcon absolute bg-[#DDEAF8] w-10 h-10 flex justify-center items-center rounded-full text-xl text-[#F85A2D] text-center p-2 pl-3 -right-3 -bottom-5 scale-0">
                <IoMdPlay />
              </button>
            </div>
          </div>
        </div>
        <button className="get-started-btn zoom-in opacity-0">
          <div>GET</div> <div>STARTED</div>
        </button>
      </div>
      {showFooter && <Footer delay={1000} />}
    </div>
  );
};

export default Revolutionizing;
