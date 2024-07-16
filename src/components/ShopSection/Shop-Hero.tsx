"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RatingStar from "../../../public/icons/Rating-Start-icon.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: {
    rate: number;
    count: number;
  };
  stock: number;
  brand: string;
  category: string;
  image: string;
  images: string[];
  oldPrice?: number;
  reviews?: number;
}

const ShopHero: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:");
        setProducts(data || []);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <main className="max-w-[1380px] m-auto p-5">
        <div className="w-full flex flex-col lg:flex-row">
          <aside className="flex-[0.8] hidden lg:flex flex-col gap-10 py-10">
            <div className="flex flex-col gap-3 sticky top-10">
              <h1 className="text-xl font-Merienda font-bold">Categories</h1>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-Merienda font-bold">
                PASTRY
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-Merienda font-bold">
                BREAKFAST
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-Merienda font-bold">
                  donut
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-5 sticky top-48 pr-16">
              <h1 className="text-xl font-Merienda font-bold">Price range</h1>
              <div className="w-full">
                <Slider
                  defaultValue={[0]}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="flex-between w-full gap-5">
                <div className="flex-[1] flex flex-col items-start justify-center">
                  <h1 className="text-sm font-Merienda font-bold text-[#4e5a6b] px-3 py-2">
                    Min
                  </h1>
                  <Input className="border-[#4e5a6b]/30 placeholder:font-Merienda" placeholder="Min" />
                </div>
                <div className="flex-[1] flex flex-col items-start justify-center">
                  <h1 className="text-sm font-Merienda font-bold text-[#4e5a6b] px-2 py-2">
                    Max
                  </h1>
                  <Input className="border-[#4e5a6b]/30 placeholder:font-Merienda" placeholder="Max" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sticky top-96">
              <h1 className="text-xl font-Merienda font-bold">Sort order</h1>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-black text-sm font-Merienda font-bold">
                  Most Popular
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-black text-sm font-Merienda font-bold">
                  Best Rating
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-black text-sm font-Merienda font-bold">
                  Price Low - High
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-black text-sm font-Merienda font-bold">
                  Price High - Low
                </h1>
              </div>
            </div>
          </aside>
          <div className="flex-[3] flex justify-center">
            <div className="w-full flex-between flex-wrap gap-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="h-[400px] w-[280px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-2 gap-5 flex-center md:basis-1/3 lg:basis-1/4"
                >
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
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ShopHero;
