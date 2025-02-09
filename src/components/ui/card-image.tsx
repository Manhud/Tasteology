import Image from "next/image";

import type { CardImageProps } from "@/types";

export const CardImage = ({ alt, onImageClick, src }: CardImageProps) => (
  <div className="relative overflow-hidden h-[400px] lg:h-[300px]">
    <Image
      fill
      alt={alt}
      className="cursor-pointer object-cover transition-transform group-hover:scale-100"
      loading="lazy"
      src={src}
      onClick={() => onImageClick(src)}
    />
  </div>
);
