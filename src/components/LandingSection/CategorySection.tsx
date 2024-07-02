import Image from "next/image";
import React from "react";
import services1 from "../../../public/images/services1.webp";
import services2 from "../../../public/images/services2.webp";
import services3 from "../../../public/images/services3.webp";
import services4 from "../../../public/images/services4.webp";

const CategorySection = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="py-20 w-full flex-between flex-wrap gap-10">
          <div className="h-[256px] w-[276px] flex-between flex-col border-b-2 md:border-r-2 border-black/20">
            <div className="flex-[1] flex-center">
              <Image src={services1} alt="" className="w-full object-cover" />
            </div>
            <div className="flex-[1] flex-center flex-col gap-3">
              <h1 className="text-2xl font-Merienda font-bold">PASTRY</h1>
              <p className="text-sm text-center font-Merienda font-normal">
                Lorem ipsum dolor sit ametgtol <br /> consecr adipiscing elit.
              </p>
            </div>
          </div>
          <div className="h-[256px] w-[276px] flex-between flex-col border-b-2 md:border-r-2 border-black/20">
            <div className="flex-[1] flex-center">
              <Image src={services2} alt="" className="w-full object-cover" />
            </div>
            <div className="flex-[1] flex-center flex-col gap-3">
              <h1 className="text-2xl font-Merienda font-bold">BREAKFAST</h1>
              <p className="text-sm text-center font-Merienda font-normal">
                Lorem ipsum dolor sit ametgtol <br /> consecr adipiscing elit.
              </p>
            </div>
          </div>
          <div className="h-[256px] w-[276px] flex-between flex-col border-b-2 md:border-r-2 border-black/20">
            <div className="flex-[1] flex-center">
              <Image src={services3} alt="" className="w-full object-cover" />
            </div>
            <div className="flex-[1] flex-center flex-col gap-3">
              <h1 className="text-2xl font-Merienda font-bold">COFEE CAKE</h1>
              <p className="text-sm text-center font-Merienda font-normal">
                Lorem ipsum dolor sit ametgtol <br /> consecr adipiscing elit.
              </p>
            </div>
          </div>
          <div className="h-[256px] w-[276px] flex-between flex-col border-b-2 md:border-r-2 border-black/20">
            <div className="flex-[1] flex-center">
              <Image src={services4} alt="" className="w-full object-cover" />
            </div>
            <div className="flex-[1] flex-center flex-col gap-3">
              <h1 className="text-2xl font-Merienda font-bold">BAKE TOST</h1>
              <p className="text-sm text-center font-Merienda font-normal">
                Lorem ipsum dolor sit ametgtol <br /> consecr adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CategorySection;
