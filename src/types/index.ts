export interface HeroContent {
  title: string;
  description: string;
  perfectEgg: {
    title: string;
    description: string;
  };
  images: {
    main: ImageContent;
    secondary: ImageContent[];
  };
}

export interface CardContent {
  title: string;
  cards: Card[];
}

export interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ImageContent {
  src: string;
  alt: string;
}

export interface ClickableProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface CardImageProps {
  alt: string;
  // eslint-disable-next-line no-unused-vars
  onImageClick: (src: string) => void;
  src: string;
}

export interface CardContentProps {
  title: string;
  description: string;
} 