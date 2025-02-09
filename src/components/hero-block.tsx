"use client";

import { useState } from "react";

import Image from "next/image";

import { heroContent } from "@/data/content";
import { logClick } from "@/lib/utils";

import { Clickable } from "./ui/clickable";
import { Modal } from "./ui/modal";

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
    <section className="mb-[120px] w-full max-w-[1146px] mx-auto md:px-0">
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[minmax(auto,754px)_minmax(auto,362px)]">
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 w-full">
          <div className="relative overflow-hidden h-[300px] sm:h-[400px] lg:h-[600px] sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <Image
              fill
              priority
              alt={heroContent.images.main.alt}
              className="cursor-pointer object-cover"
              src={heroContent.images.main.src}
              onClick={(e) => handleImageClick(heroContent.images.main.src, e)}
            />
          </div>
          {heroContent.images.secondary.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-[150px] sm:h-[245px] lg:h-[295px]"
            >
              <Image
                fill
                alt={image.alt}
                className="cursor-pointer object-cover"
                loading="lazy"
                src={image.src}
                onClick={(e) => handleImageClick(image.src, e)}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between w-full">
          <div>
            <Clickable>
              <h1 className="text-3xl font-light leading-[33px]">
                {heroContent.title}
              </h1>
              <hr className="w-full border-t border-white my-[30px]" />
              <p className="font-light text-white text-[21px] leading-[30px]">
                {heroContent.description}
              </p>
            </Clickable>
          </div>

          <Clickable className="mt-[30px]">
            <h3 className="mb-2 text-[15px] font-bold uppercase text-red">
              {heroContent.perfectEgg.title}
            </h3>
            <p className="text-[21px] font-bold text-white leading-[30px]">
              {heroContent.perfectEgg.description}
            </p>
          </Clickable>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Image
          alt="Enlarged view"
          className="max-h-[80vh] w-auto rounded-lg"
          height={800}
          src={selectedImage}
          width={1200}
        />
      </Modal>
    </section>
  );
}
