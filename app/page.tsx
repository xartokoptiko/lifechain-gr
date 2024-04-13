"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BackgroundGradientAnimationMin } from "@/components/ui/background-gradient-animation-min";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-animation";

export default function Home() {
  const people = [
    {
      id: 1,
      name: "Enri skourti",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Andreas krassas",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Alkiinos Alysandrakis",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Lampros Karachristos",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

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

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <main>
      <div className="absolute top-0 right-0 z-50 flex flex-row w-full p-10 text-white font-extrabold items-center justify-between">
        <div className="flex felx-col w-[200px] items-center">
          <img
            src="logo.png"
            className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
          />
        </div>
        <div className="flex flex-row space-x-3 ">
          <a href="/travel/" about="Life Chain Travel page">
            Travel
          </a>
          <a href="/university/" about="Life Chain University page">
            University
            </a>
        </div>
        <div className="flex flex-col items-center w-[200px]">
          <p>Become a responder</p>
        </div>
      </div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            The Ultimate greek safety app for everyone
          </h1>
        </div>
      </BackgroundGradientAnimation>
      <div className="flex flex-col p-10 py-[180px] w-full">
        <TypewriterEffect words={words} />
      </div>
      <div className="flex flex-row w-full py-[100px] max-sm:flex-col">
        <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[100px]">
          <img
            src="/app/photos/homepage.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-red-800 rounded-xl 2xl:w-[210px] 2xl:h-[450px]"
          />
        </div>
        <div className="flex flex-col w-1/2 items-center max-sm:w-full">
          <div className="flex flex-col w-full lg:max-w-[300px] md:max-w-[300px] max-sm:px-[10px] max-sm:items-center">
            <p className="text-3xl font-extrabold text-[#424242]">
              Life Chain University
            </p>
            <p className="text-lg font-extrabold text-[#424242] mt-[15px]">
              uni_app_catch
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  uni_app_one
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  uni_app_two
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  uni_app_three
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  uni_app_four
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  uni_app_five
                </p>
              </div>
            </div>
            <a
              href="/university"
              className="flex felx-col px-[20px] py-[10px] mt-[30px] items-center justify-center text-center rounded-xl bg-red-500 text-white cursor-pointer font-extrabold"
            >
              <p>learn</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full py-[100px] max-sm:flex-col">
        <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[100px]">
          <div className="flex flex-col w-full lg:max-w-[300px] md:max-w-[300px] max-sm:px-[10px] max-sm:items-center">
            <p className="text-3xl font-extrabold text-[#424242] lg:font-bold md:font-bold">
              Life Chain Travel
            </p>
            <p className="text-lg font-extrabold text-[#424242] mt-[15px] lg:font-bold md:font-bold">
              trav_app_catch
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  rav_app_one
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  trav_app_two
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  trav_app_three
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  trav_app_four
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  trav_app_five
                </p>
              </div>
            </div>
            <a
              href="/travel"
              className="flex felx-col px-[20px] py-[10px] mt-[30px] items-center justify-center text-center rounded-xl bg-red-500 text-white cursor-pointer font-extrabold"
            >
              <p>learn</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 max-sm:w-full">
          <img
            src="/app/photos/homeprivate.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-red-800 rounded-xl 2xl:w-[210px] 2xl:h-[450px]"
          />
        </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="flex flex-col w-full py-[120px]">
        <p className="w-full text-center font-extrabold text-red-500 text-5xl mb-[100px]">
          Contact us via
        </p>
        <div className="grid grid-cols-3 gap-[50px]">
          <div className="flex flex-col items-center justify-center">
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-red-500">
                  Aceternity UI
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>

          <div className="flex flex-col items-center justify-center">
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-red-500">
                  Aceternity UI
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>

          <div className="flex flex-col items-center justify-center">
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-red-500">
                  Aceternity UI
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>

          <div></div>

          <div className="flex flex-col items-center justify-center">
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-red-500">
                  Aceternity UI
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>

          <div></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-[120px] w-full">
        <p className="w-full text-center font-extrabold text-red-500 text-5xl mb-[100px]">
          The Team behind safety
        </p>
        <div className="flex flex-row items-center justify-center px-[100px] w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>

      <BackgroundGradientAnimationMin>
        <div className="flex flex-col w-full px-[25px] py-[15px]">
          <div className="grid grid-cols-4 gap-10 w-full h-[400px] text-white">
            <div className="flex flex-col">
              <img
                src="logo.png"
                className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
              />
            </div>

            <div className="flex flex-col mt-[35px] items-center">
              <div className="space-y-3 flex flex-col">
                <p>Email : lifechainsocial@gmail.com</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Linked in</p>
              </div>
            </div>

            <div className="flex flex-col mt-[35px] items-center">
              <div className="space-y-3 flex flex-col">
                <a>Travel</a>
                <a>University</a>
                <a>Login</a>
              </div>
            </div>

            <div className="flex flex-col mt-[35px] items-center">
              <div className="space-y-3 flex flex-col">
              <a>Privacy Policy</a>
              <a>Terms of use</a>
              </div>
            </div>

            <div className="flex flex-col col-span-4 items-center jusityf-center p-[5px] mt-[100px]">
              All right reserved www.lifechain.gr
            </div>
          </div>
        </div>
      </BackgroundGradientAnimationMin>
    </main>
  );
}
