"use client";

import Link from "next/link";

import { LogOut, Menu, UserRound } from "lucide-react";
import Image from "next/image";
import Hero from "./Hero";

const Appbar = () => {
  return (
    <>
      <header className="py-4 border-b md:border-none fixed top-0 left-0 right-0 z-10 bg-white md:bg-white/0">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-between items-center md:border rounded-xl max-w-2xl lg:max-w-4xl mx-auto md:bg-white/90 md:backdrop:blur-sm">
            <div className="border rounded-lg inline-flex justify-center items-center">
              <Image
                width={350}
                height={72}
                alt="logo"
                src="https://cdn.prod.website-files.com/65e50e9b58299f24689234d2/667a5aa595f7ad4106b5c922_Screenshot%202024-06-24%20225016.png"
              />
            </div>
            <div className="hidden md:block">
              <nav className="flex gap-8 text-sm">
                <Link
                  className="p-3 text-black/70 hover:text-black transition"
                  href="https://docs.formulainsight.io/api-reference/introduction"
                >
                  API & Docs
                </Link>
                <Link
                  className=" p-3 text-black/70 hover:text-black transition"
                  href="mailto:stefan@formulainsight.io; will@formulainsight.io?subject=Contact"
                >
                  Contact
                </Link>
                <Link
                  className="bg-slate-900 p-3 rounded-lg text-white hover:bg-slate-700 transition"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgl6b4tGq5GB50MSDUPyWE1dGEKcpfAiPqaH7I6ivgRxVwow/viewform"
                >
                  Get API Access
                </Link>
              </nav>
            </div>
            <div className="flex gap-4 items-center">
              <span className="md:hidden">
                <Menu />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Appbar;
