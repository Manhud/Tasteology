"use client";

import Image from "next/image";
import { useState } from "react";
import { Modal } from "./ui/modal";
import { logClick } from "@/lib/utils";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "RED",
    description:
      "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
    image: "/images/cards/red-taste.jpg",
  },
  {
    id: 2,
    title: "Green",
    description:
      "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",
    image: "/images/cards/green-taste.png",
  },
  {
    id: 3,
    title: "White",
    description:
      "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat. ",
    image: "/images/cards/white-taste.png",
  },
];

export function CardBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc: string, e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    logClick(target);
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <section className="pt-[120px] w-[1146px] mx-auto">
      <div className="container">
        <div className="w-fit mx-auto">
          <h2 className="text-center text-3xl font-light md:text-4xl">
            TASTE THE COLOURS
          </h2>
          <hr className="border-t border-white my-[30px]" />
        </div>
        <div className="grid gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-[300px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="cursor-pointer transition-transform group-hover:scale-100"
                  onClick={(e) => handleImageClick(card.image, e)}
                />
              </div>
              <div className="p-[30px] text-center">
                <h3 className="mb-[10px] text-[21px] font-bold ">
                  {card.title}
                </h3>
                <p className="text-[21px] text-white font-light leading-[30px]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
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
