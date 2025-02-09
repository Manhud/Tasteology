"use client";

import { useState } from "react";

import Image from "next/image";

import { cardContent } from "@/data/content";

import { CardContent } from "./ui/card-content/card-content";
import { CardImage } from "./ui/card-image/card-image";
import { Clickable } from "./ui/clickable";
import { Modal } from "./ui/modal";

export function CardBlock() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedImage: "",
  });

  const handleImageClick = (imageSrc: string) => {
    setModalState({
      isOpen: true,
      selectedImage: imageSrc,
    });
  };

  const handleModalClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section className="w-full max-w-[1146px] mx-auto md:px-0">
      <header className="w-fit mx-auto mb-[60px]">
        <Clickable>
          <h2 className="text-center text-3xl font-light">
            {cardContent.title}
          </h2>
          <hr className="border-t border-white my-[30px]" />
        </Clickable>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        {cardContent.cards.map((card) => (
          <article
            key={card.id}
            className="group overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <CardImage
              alt={card.title}
              src={card.image}
              onImageClick={handleImageClick}
            />
            <CardContent description={card.description} title={card.title} />
          </article>
        ))}
      </div>

      <Modal isOpen={modalState.isOpen} onClose={handleModalClose}>
        <Image
          alt="Enlarged view"
          className="max-h-[80vh] w-auto rounded-lg"
          height={800}
          src={modalState.selectedImage}
          width={1200}
        />
      </Modal>
    </section>
  );
}
