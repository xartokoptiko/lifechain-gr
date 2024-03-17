import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TypewriterEffect } from "@/components/ui/typewriter-animation";
import Image from "next/image";

export default function Home() {

  const words = [
    {
      text: "An",
      className: "text-slate-600",
    },
    {
      text: "Appication",
      className: "text-slate-600",
    },
    {
      text: "developed",
      className: "text-slate-600",
    },
    {
      text: "to",
      className: "text-slate-600",
    },
    {
      text: "keep",
      className: "text-slate-600",
    },
    {
      text: "you",
      className: "text-slate-600",
    },
    {
      text: "safe",
      className: "text-slate-600",
    },
    {
      text: "Everywhere",
      className: "text-red-600",
    },
    {
      text: "Everytime",
      className: "text-red-600",
    },
  ];


  return (
    <main>
      <BackgroundGradientAnimation>
        <div className="flex flex-row w-full p-10 text-white items-center justify-between">
          <div className="flex felx-col w-[200px] items-center">
            <img
              src="logo.png"
              className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
            />
          </div>
          <div className="flex flex-row space-x-3">
            <p>Travel</p>
            <p>University</p>
          </div>
          <div className="flex flex-col items-center w-[200px]">
            <p>Become a responder</p>
          </div>
        </div>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            The Ultimate greek safety app for everyone
          </p>
        </div>
      </BackgroundGradientAnimation>
      <div className="flex flex-col p-10 py-[180px] w-full">
        <TypewriterEffect words={words} />
      </div>
    </main>
  );
}
