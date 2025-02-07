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
    <section className="w-full mb-[120px]">
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 max-w-[1146px] mx-auto">
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 xl:w-[754px]">
          <div className="relative overflow-hidden md:row-span-2 h-[600px] ">
            <Image
              src="/images/hero/cooking-pot.jpg"
              alt="Cooking pot over fire"
              fill
              className="cursor-pointer object-cover"
              onClick={(e) =>
                handleImageClick("/images/hero/cooking-pot.jpg", e)
              }
            />
          </div>
          <div className="relative overflow-hidden h-[295px] ">
            <Image
              src="/images/hero/chef-preparing.jpg"
              alt="Chef preparing ingredients"
              fill
              className="cursor-pointer object-cover"
              onClick={(e) =>
                handleImageClick("/images/hero/chef-preparing.jpg", e)
              }
            />
          </div>
          <div className="relative overflow-hidden h-[295px] ">
            <Image
              src="/images/hero/eggs-preparation.jpg"
              alt="Perfect eggs preparation"
              fill
              className="cursor-pointer object-cover"
              onClick={(e) =>
                handleImageClick("/images/hero/eggs-preparation.jpg", e)
              }
            />
          </div>
        </div>

        <div className="flex flex-col justify-between w-[362px] ml-auto">
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

          <div>
            <h3 className="mb-2 text-[15px] font-bold uppercase text-red">
              THE PERFECT EGG
            </h3>
            <p className=" text-[21px] font-bold text-white leading-[30px]">
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
