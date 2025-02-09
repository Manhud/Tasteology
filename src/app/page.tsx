import { CardBlock } from "@/components/card-block";
import { HeroBlock } from "@/components/hero-block";

export default function Home() {
  return (
    <main className="animate-blurred-fade-in">
      <HeroBlock />
      <CardBlock />
    </main>
  );
}
