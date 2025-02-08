"use client";

import { useState } from "react";

import Image from "next/image";

import { logClick } from "@/lib/utils";

import { Modal } from "./ui/modal";


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
    <section className="w-full max-w-[1146px] mx-auto px-4 md:px-0">
      <div className="w-fit mx-auto mb-[60px]">
        <h2 className="text-center text-3xl font-light">TASTE THE COLOURS</h2>
        <hr className="border-t border-white my-[30px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        {cards.map((card) => (
          <article
            key={card.id}
            className="group overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden h-[400px] lg:h-[300px]">
              <Image
                fill
                alt={card.title}
                className="cursor-pointer object-cover transition-transform group-hover:scale-100"
                loading="lazy"
                src={card.image}
                onClick={(e) => handleImageClick(card.image, e)}
              />
            </div>
            <div className="p-[30px] text-center">
              <h3 className="mb-[10px] text-[21px] font-bold">{card.title}</h3>
              <p className="text-[21px] text-white font-light leading-[30px]">
                {card.description}
              </p>
            </div>
          </article>
        ))}
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
