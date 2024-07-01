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
            y: 20,
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
    <section className="w-full bg-hero">
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col lg:flex-row px-5">
          <div className="flex-[1] flex flex-col gap-10 items-start justify-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl md:text-5xl font-Merienda font-bold heading">
                Quality Products
              </h1>
              <h1 className="text-2xl md:text-5xl font-Merienda font-bold heading">
                Bakery Items
              </h1>
            </div>
            <Button className="py-5 px-5 text-lg md:text-xl font-Merienda font-bold rounded-full hero-button">
              SHOP NOW
            </Button>
          </div>
          <div className="flex-[1] flex-center">
            <Image
              src={HeroBannerShape}
              alt=""
              className="w-full object-cover box"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
