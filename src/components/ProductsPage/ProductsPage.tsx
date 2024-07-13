import Image from "next/image";
import React from "react";
import ProductImage1 from "../../../public/images/product-3.jpg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductsPage = () => {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <main className="max-w-[1388px] m-auto">
        <div className="min-h-fit py-10 w-full flex-between flex-col lg:flex-row">
          <div className="flex-[1] flex-between flex-col lg:flex-row">
            <div className="flex-[1] flex-center flex-row lg:flex-col gap-2 lg:gap-7">
              <Image
                src={ProductImage1}
                alt=""
                className="max-w-[70px] lg:max-w-[100px] object-cover rounded-xl"
              />
              <Image
                src={ProductImage1}
                alt=""
                className="max-w-[70px] lg:max-w-[100px] object-cover rounded-xl"
              />
              <Image
                src={ProductImage1}
                alt=""
                className="max-w-[70px] lg:max-w-[100px] object-cover rounded-xl"
              />
              <Image
                src={ProductImage1}
                alt=""
                className="max-w-[70px] lg:max-w-[100px] object-cover rounded-xl"
              />
            </div>
            <div className="flex-[5] w-full flex flex-col items-center justify-evenly p-3">
              <Image
                src={ProductImage1}
                alt=""
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="h-full flex-[1] w-full flex flex-col items-start justify-start px-2 gap-10">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-black font-Merienda font-bold">
                Product Name
              </h1>
              <p className="text-sm lg:text-lg text-black font-Merienda font-bold">
                Product Rating, How Many Prople Rated
              </p>
            </div>
            <div className="flex flex-col">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="size-1">Size 1</SelectItem>
                  <SelectItem value="size-2">Size 2</SelectItem>
                  <SelectItem value="size-3">Size 3</SelectItem>
                  <SelectItem value="size-4">Size 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProductsPage;
