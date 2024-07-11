import Link from "next/link";
import React from "react";
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

const HeaderSection = () => {
  return (
    <section className="w-full">
      <main className="max-w-[1380px] m-auto">
        <div className="pt-5 px-5 lg:pg-0 w-full flex-between">
          <div className="flex--[1] flex-start gap-5">
            <Image src={Logo} alt="/" className="w-20 object-cover" />
          </div>
          <div className="flex--[1] hidden lg:flex-center gap-5">
            <Link href="/" className="text-black font-Merienda font-bold">
              SHOP ALL
            </Link>
            <Link href="/" className="text-black font-Merienda font-bold">
              BEST DEALS
            </Link>
            <Link href="shop.marutibakersmart.com" className="text-black font-Merienda font-bold">
            ABOUT US
            </Link>
            <Link href="/" className="text-black font-Merienda font-bold">
              NEW LAUNCHES
            </Link>
            <Link href="/" className="text-black font-Merienda font-bold">
              REWARDS
            </Link>
          </div>
          <div className="flex--[1] hidden lg:flex-end gap-5">
            <Link href="/">
              <Image src={SearchIcon} alt="/" className="object-cover" />
            </Link>
            <div className="flex--[1] flex-end gap-5">
              <Link href="/">
                <Image src={UserIcon} alt="/" className="object-cover" />
              </Link>
              <div className="flex--[1] flex-end gap-5">
                <Link href="/">
                  <Image src={CartIcon} alt="/" className="object-cover" />
                </Link>
              </div>
              <div className="flex--[1] flex-end gap-5">
                <Link href="/">
                  <Image
                    src={LocationPinIcon}
                    alt="/"
                    className="object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-[1] flex-end lg:hidden gap-5">
          <Link href="/">
              <Image src={SearchIcon} alt="/" className="object-cover" />
            </Link>
            <Sheet>
              <SheetTrigger>
                <Image src={MenuIcon} alt="/" className="object-cover invert" />
              </SheetTrigger>
              <SheetContent>
                <div className="h-screen w-full flex flex-col gap-10 items-start justify-center">
                  <div className="flex flex-col gap-5 items-start justify-center">
                    <Link href="/" className="text-2xl text-black font-Merienda font-medium">
                      SHOP ALL
                    </Link>
                    <Link href="/" className="text-2xl text-black font-Merienda font-medium">
                      BEST DEALS
                    </Link>
                    <Link href="/" className="text-2xl text-black font-Merienda font-medium">
                      GIFTING
                    </Link>
                    <Link href="/" className="text-2xl text-black font-Merienda font-medium">
                      NEW LAUNCHES
                    </Link>
                    <Link href="/" className="text-2xl text-black font-Merienda font-medium">
                      REWARDS
                    </Link>
                  </div>
                  <div className="flex--[1] flex-end gap-5">
                    <div className="flex-[1] flex-end gap-5"> 
                      <Link href="/">
                        <Image src={UserIcon} alt="/" className="object-cover" />
                      </Link>
                      <div className="flex--[1] flex-end gap-5">
                        <Link href="/">
                          <Image
                            src={CartIcon}
                            alt="/"
                            className="object-cover"
                          />
                        </Link>
                      </div>
                      <div className="flex--[1] flex-end gap-5">
                        <Link href="/">
                          <Image
                            src={LocationPinIcon}
                            alt="/"
                            className="object-cover"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
