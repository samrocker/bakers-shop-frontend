import Image from "next/image";
import React from "react";
import Product1 from '../../../public/images/product-1.jpg'
import Product2 from '../../../public/images/product-2.jpg'
import Product3 from '../../../public/images/product-3.jpg'

const ProductsSection = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col">
          <div className="flex-[1] flex-center flex-col gap-5">
            <h1 className="text-2xl md:text-5xl text-black font-Merienda font-bold">
              New Products
            </h1>
            <div className="flex-center gap-10">
              <h1 className="text-xs lg:text-lg font-Merienda font-medium">
                Our Features
              </h1>
              <h1 className="text-xs lg:text-lg font-Merienda font-medium">
                Best Sellers
              </h1>
              <h1 className="text-xs lg:text-lg font-Merienda font-medium">
                New Items
              </h1>
            </div>
          </div>
          <div className="flex-[3] flex-center flex-col gap-5">
            <div className="h-[400px] w-[256px] flex-between flex-col gap-5 border-[1px] border-black/30 px-3 py-3 rounded-sm">
              <div className="flex-[1] w-full flex-center">
                <Image src={Product1} alt="" className="w-full object-cover rounded-sm" />
              </div>
              <div className="flex-[1] w-full flex flex-col gap-5 items-start justify-start">
                <div className="flex flex-col gap-1 items-start justify-center">
                <h1 className="text-xl md:text-2xl text-black font-Merienda font-bold">Product Name</h1>
                <p  className="text-sm md:text-lg text-black font-Merienda font-bold">Product Category</p>
                </div>
                <h1 className="text-sm md:text-lg text-black font-Merienda font-bold">Product Price</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProductsSection;
