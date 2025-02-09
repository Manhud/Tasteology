import type { CardContentProps } from "@/types";

import { Clickable } from "../clickable";

export const CardContent = ({ title, description }: CardContentProps) => (
  <Clickable className="p-[30px] text-center">
    <h3 className="mb-[10px] text-[21px] font-bold">{title}</h3>
    <p className="text-[21px] text-white font-light leading-[30px]">
      {description}
    </p>
  </Clickable>
);
