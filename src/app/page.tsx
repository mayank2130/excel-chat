import Appbar from "@/components/Appbar";
import DocsShowcase from "@/components/DocsShowcase";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white flex items-center justify-center h-screen">
      <Appbar />
      <div className="">
        <Hero />

        <DocsShowcase />
      </div>
    </div>
  );
}
