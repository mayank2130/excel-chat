import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center md:mt-80 mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-[600px] lg:max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl mt-20 lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center">
            Analyze Complex Spreadsheets Using Plain English
          </h1>

          <p className="text-2xl mt-10 tracking-tighter text-black/70 text-center">
            Building a central repository for hedge funds to store critical
            Excel data, <br className="hidden md:block" /> accessible through
            conversational search
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link
            href="https://calendly.com/will-formulainsight/formula-insight-intro"
            className="p-4 rounded-lg text-sm md:text-base bg-slate-900 hover:bg-slate-800 tracking-wider"
          >
            Inquire
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
