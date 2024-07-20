import Image from "next/image";
import React from "react";
import ProductSampleImage1 from "../../../public/images/product-1.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductsPage = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col gap-5">
          <div className="flex-[1] w-full flex-between flex-col lg:flex-row gap-5">
            <div className="flex-[1] flex-center flex-col gap-5">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductSampleImage1}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] flex-center gap-7">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                      <Image
                        src={ProductSampleImage1}
                        alt=""
                        className="w-36 object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                      <Image
                        src={ProductSampleImage1}
                        alt=""
                        className="w-36 object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                      <Image
                        src={ProductSampleImage1}
                        alt=""
                        className="w-36 object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                      <Image
                        src={ProductSampleImage1}
                        alt=""
                        className="w-36 object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <div className="flex-[1.5] flex flex-col gap-5 items-start justify-start">
              <h1>Product Name</h1>
              <p>SKU:</p>
              <p>Brand</p>
              <h1>price </h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProductsPage;
