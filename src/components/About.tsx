import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    aboutTimeline
      .from([titleSplit.words, ".sub-content", ".badge"], {
        opacity: 0,
        y: 100,
        ease: "expo.out",
        duration: 1,
        stagger: 0.02,
      })
      .from(
        ".top-grid > div",
        {
          opacity: 0,
          x: -500,
          ease: "expo.out",
          duration: 1,
          stagger: {
            each: 0.05,
            from: "end",
          },
        },
        "<0.5"
      )
      .from(
        ".bottom-grid > div",
        {
          opacity: 0,
          x: 500,
          ease: "expo.out",
          duration: 1,
          stagger: {
            each: 0.05,
          },
        },
        "<"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <Image
            src="/images/abt1.png"
            alt="grid-img-1"
            width={330}
            height={285}
          />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <Image
            src="/images/abt2.png"
            alt="grid-img-2"
            width={600}
            height={285}
          />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <Image
            src="/images/abt5.png"
            alt="grid-img-5"
            width={330}
            height={285}
          />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <Image
            src="/images/abt3.png"
            alt="grid-img-3"
            width={780}
            height={285}
          />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <Image
            src="/images/abt4.png"
            alt="grid-img-4"
            width={480}
            height={285}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
