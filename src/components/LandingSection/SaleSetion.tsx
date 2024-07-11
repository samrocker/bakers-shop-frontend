import Image from "next/image";
import React from "react";
import SaleBanner1 from "../../../public/images/sale-banner1.webp";
import SaleBanner2 from "../../../public/images/sale-banner2.webp";
import { Button } from "../ui/button";

const SaleSetion = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="py-10 px-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div className="flex-[1] w-full flex-center relative">
            <Image src={SaleBanner1} alt="" className="w-full" />
            <div className="h-full w-full flex flex-col gap-3 absolute object-cover z-10 top-0 items-start justify-center px-10">
                <h1 className="text-xs md:text-3xl font-Merienda font-bold text-[#2B4174]"><span className="text-[#F7553E]">70%</span> Sale Off</h1>
                <div className="flex flex-col gap-2">
              <h1 className="text-md md:text-3xl text-black font-Merienda font-bold">
                Best Quality
              </h1>
              <h1 className="text-md md:text-3xl text-black font-Merienda font-bold">
                Products
              </h1>
                </div>
              <Button className="py-3 px-3 bg-[#F7553E] hover:bg-[#d44835] text-xs md:text-sm font-Merienda font-bold rounded-full hero-button">
                SHOP NOW
              </Button>
            </div>
          </div>
          <div className="flex-[1] w-full flex-center relative">
            <Image src={SaleBanner2} alt="" className="w-full" />
            <div className="h-full w-full flex flex-col gap-3 absolute object-cover z-10 top-0 items-start justify-center px-10">
                <h1 className="text-xs md:text-3xl font-Merienda font-bold text-[#2B4174]"><span className="text-[#F7553E]">25%</span> Sale Off</h1>
                <div className="flex flex-col gap-2">
              <h1 className="text-xs md:text-3xl text-black font-Merienda font-bold">
              Hot & Spicy
              </h1>
              <h1 className="text-xs md:text-3xl text-black font-Merienda font-bold">
              Pastry
              </h1>
                </div>
              <Button className="py-3 px-3 bg-[#F7553E] hover:bg-[#d44835] text-xs md:text-sm font-Merienda font-bold rounded-full hero-button">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SaleSetion;
