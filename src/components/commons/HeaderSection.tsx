"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import SearchIcon from "../../../public/icons/search-line.png";
import UserIcon from "../../../public/icons/user-line.png";
import CartIcon from "../../../public/icons/shopping-cart-line.png";
import LocationPinIcon from "../../../public/icons/map-pin-line.png";
import MenuIcon from "../../../public/icons/menu-line.png";
import { Button } from "../ui/button";
import { gsap } from "gsap";

const HeaderSection = () => {
  useEffect(() => {
    const logo = document.querySelector(".logo");
    const navLinks = document.querySelectorAll(".nav-link");
    const icons = document.querySelectorAll(".icon");

    if (logo) {
      gsap.fromTo(
        logo,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
    }

    if (navLinks.length) {
      gsap.fromTo(
        navLinks,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }

    if (icons.length) {
      gsap.fromTo(
        icons,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section className="w-full absolute top-0">
      <main className="max-w-[1380px] m-auto">
        <div className="pt-5 px-5 lg:px-0 w-full flex-between">
          <div className="flex-[1] flex-start">
            <Image src={Logo} alt="Logo" className="w-20 object-cover logo" />
          </div>
          <div className="flex-[1] hidden lg:flex-center gap-5">
            {["HOME", "ABOUT", "PORTFOLIO", "PAGES", "CONTACT", "BLOG"].map(
              (link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-black font-Merienda font-bold nav-link"
                >
                  {link}
                </Link>
              )
            )}
          </div>
          <div className="flex-[1] hidden lg:flex-end gap-5">
            <Image
              src={SearchIcon}
              alt="Search"
              className="object-cover icon"
            />
            <Image src={UserIcon} alt="User" className="object-cover icon" />
            <Image src={CartIcon} alt="Cart" className="object-cover icon" />
            <Image
              src={LocationPinIcon}
              alt="Location"
              className="object-cover icon"
            />
          </div>
          <div className="flex-[1] flex-end lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Image src={MenuIcon} alt="" className="object-cover invert" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
