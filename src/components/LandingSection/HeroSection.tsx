"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import HeroBannerShape from "../../../public/images/hero-banner-shape.webp";
import { gsap } from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const image = document.querySelector(".box");
    const headings = document.querySelectorAll(".heading");
    const button = document.querySelector(".hero-button");

    if (image) {
      gsap.fromTo(image, {
        opacity: 0,
        y: -50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(image, {
            y: 10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        }
      });
    }

    if (headings.length) {
      gsap.fromTo(headings, {
        opacity: 0,
        y: -50,
      }, {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
      });
    }

    if (button) {
      gsap.fromTo(button, {
        scale: 0.8,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        delay: 0.5,
      });
    }
  }, []);

  return (
    <section className="w-full">
      <main className="max-w-[1380px] m-auto">
        <div className="min-h-fit lg:h-[70vh] pt-28 lg:pt-10 w-full flex-between flex-col lg:flex-row px-5 gap-20 lg:gap-0">
          <div className="flex-[1] w-full flex flex-col gap-10 items-start justify-center pt-20 lg:pt-0">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-Merienda font-bold heading">
                Quality Products
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-Merienda font-bold heading">
                Bakery Items
              </h1>
            </div>
            <Button className="py-5 px-5 text-lg bg-[#F7553E] hover:bg-[#d44835] md:text-xl font-Merienda font-bold rounded-full hero-button">
              SHOP NOW
            </Button>
          </div>
          <div className="flex-[1] w-full flex-end lg;flex-center">
            <Image
              src={HeroBannerShape}
              alt=""
              className="flex-[1] lg:w-full object-cover box"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
