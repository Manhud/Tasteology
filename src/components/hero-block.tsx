"use client";

import Image from "next/image";
import { useState } from "react";
import { Modal } from "./ui/modal";
import { logClick } from "@/lib/utils";

export function HeroBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc: string, e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    logClick(target);
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <section className="mb-[120px] w-full max-w-[1146px] mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[minmax(auto,754px)_minmax(auto,362px)]">
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 w-full">
          <div className="relative overflow-hidden h-[300px] sm:h-[400px] lg:h-[600px] sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <Image
              src="/images/hero/cooking-pot.jpg"
              alt="Professional cooking pot with precise temperature control for molecular gastronomy"
              fill
              priority
              className="cursor-pointer object-cover"
              onClick={(e) =>
                handleImageClick("/images/hero/cooking-pot.jpg", e)
              }
            />
          </div>
          <div className="relative overflow-hidden h-[150px] sm:h-[245px] lg:h-[295px]">
            <Image
              src="/images/hero/chef-preparing.jpg"
              alt="Chef preparing ingredients"
              fill
              loading="lazy"
              className="cursor-pointer object-cover"
              onClick={(e) =>
                handleImageClick("/images/hero/chef-preparing.jpg", e)
              }
            />
          </div>
          <div className="relative overflow-hidden h-[150px] sm:h-[245px] lg:h-[295px]">
            <Image
              src="/images/hero/eggs-preparation.jpg"
              alt="Perfect eggs preparation"
              fill
              loading="lazy"
              className="cursor-pointer object-cover"
              onClick={(e) =>
                handleImageClick("/images/hero/eggs-preparation.jpg", e)
              }
            />
          </div>
        </div>

        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="text-3xl font-light leading-[33px]">
              WHAT DOES COOKING MEAN?
            </h1>
            <hr className="w-full border-t border-white my-[30px]" />
            <p className="font-light text-white text-[21px] leading-[30px]">
              Is it simply applying heat to a food product? A way of making
              certain food safe to eat? Or a way to create flavour and make food
              more appealing? This is just part of what Hervé This, the father
              of molecular gastronomy, has dedicated his life to finding out. We
              spoke to him to find out what his experiments have told him. And
              in the process even discovered the secret to cooking the perfect
              egg...
            </p>
          </div>

          <div className="mt-[30px]">
            <h3 className="mb-2 text-[15px] font-bold uppercase text-red">
              THE PERFECT EGG
            </h3>
            <p className="text-[21px] font-bold text-white leading-[30px]">
              Keep water between 67 and 68°C for a flavourful, tender yolk
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Image
          src={selectedImage}
          alt="Enlarged view"
          width={1200}
          height={800}
          className="max-h-[80vh] w-auto rounded-lg"
        />
      </Modal>
    </section>
  );
}
