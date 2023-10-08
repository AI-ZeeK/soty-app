import ProductCard from "@/components/Card/ProductCard";
import {menWears} from "@/data/data";
import Image from "next/image";

export default function Men() {
  return (
    <main className="md:p-4 grid gap-[2px] grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8">
      {menWears.map((menwear, i) => (
        <ProductCard key={i} wear={menwear} />
      ))}
    </main>
  );
}
