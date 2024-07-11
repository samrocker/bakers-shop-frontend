'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RatingStar from "../../../public/icons/Rating-Start-icon.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

type Product = {
  id: number;
  title: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
  image: string;
};

const SpecialOfTheMonthSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [emblaRef] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="pt-10 w-full flex-between flex-col">
          <div className="flex-[0.5] w-full flex-center px-3 py-5">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-Merienda font-bold">
                Special Of The Month
            </h1>
          </div>
          <div className="flex-[1] w-full py-10">
            <Carousel
              className="max-w-[1380px] m-auto w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="flex-center md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="h-[400px] w-[280px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-2 gap-5">
                      <div className="flex-[2] w-full flex-center rounded-xl">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={150}
                          height={150}
                          className="object-cover mix-blend-hard-light"
                        />
                      </div>
                      <div className="flex-[1] w-full flex-between">
                        <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                          <h1 className="text-sm font-bold">{product.title}</h1>
                          <p className="text-[#4B5563] text-sm font-medium">
                            {product.category}
                          </p>
                          <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                            <Image
                              src={RatingStar}
                              alt="Rating Star"
                              height={17}
                              width={17}
                            />
                            {product.rating.rate}
                          </h1>
                        </div>
                        <div className="flex-[1] flex-end flex-col text-right">
                          <h1 className="text-md font-bold">${product.price}</h1>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-1" />
              <CarouselNext className="absolute right-1" />
            </Carousel>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SpecialOfTheMonthSection;
