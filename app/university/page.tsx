"use client";
import { BackgroundGradientAnimationMin } from "@/components/ui/background-gradient-animation-min";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";
import { useState } from "react";

export default function University() {
  const [step, setStep] = useState(1);

  //HOW IT WORKS STEPS

  const stepContent = {
    1: {
      photo: "/homepage_en.png",
      title: "1) Press the sos button that suits you",
      description: "Press the sos button that suits you emergency the most",
    },
    2: {
      photo: "/countdown_en.png",
      title: "2) Click the Ask for 'Help button'",
      description:
        "Optionally, you can add more information and upload a photo of the incident",
    },
    3: {
      photo: "/buttons_en.png",
      title: "3) Keep calm, help is on the way !",
      description:
        "As soon as the guard receives your signal, the corresponding message will appear on your screen and he will soon be at your location to help you",
    },
  };

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  //STICKY SCROLL VIEW CONTENT
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

  return (
    <main>
      <div className="absolute top-0 right-0 z-50 flex flex-row w-full p-10 text-white font-extrabold items-center justify-between">
        <div className="flex felx-col w-[200px] items-center">
          <Link href={"/"}>
            <img
              src="logo.png"
              className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
            />
          </Link>
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
          <p>Login</p>
        </div>
      </div>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Life Chain University
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Let's make together the Greek Universities a safer place for everyone
        </p>
      </WavyBackground>
      <div className="flex flex-row w-full py-[180px] max-sm:flex-col">
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
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pb-[180px] items-center justify-center">
        <div className="w-[600px] h-[400px] max-sm:w-[300px] max-sm:h-[200px] rounded-md">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/QcmhiyIaV2o?si=w9DnRVzhT6F1ZUdh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full pb-[180px]">
        <div className="flex flex-col w-full items-end justify-center">
          <img
            src={stepContent[step as keyof typeof stepContent].photo}
            className="w-[172px] h-[373px] rounded-xl shadow-2xl shadow-redonebg"
          />
        </div>
        <div className="flex flex-col w-full text-center items-center justify-center space-y-4">
          <p className="font-extrabold text-lg w-[200px]">
            {stepContent[step as keyof typeof stepContent].title}
          </p>
          <p className="w-[200px]">
            {stepContent[step as keyof typeof stepContent].description}{" "}
          </p>
        </div>
        <div className="flex flex-col justify-between  w-full">
          <button
            onClick={() => handleStepChange(1)}
            onMouseEnter={() => handleStepChange(1)}
            className="w-[200px] h-[80px] rounded-lg text-white font-extrabold bg-redonebg items-center justify-center hover:border-2 hover:border-redonebg hover:text-redonebg hover:shadow-2xl hover:shadow-redonebg hover:bg-white"
          >
            Step 1
          </button>

          <button
            onClick={() => handleStepChange(2)}
            onMouseEnter={() => handleStepChange(2)}
            className="w-[200px] h-[80px] rounded-lg text-white font-extrabold bg-redonebg items-center justify-center hover:border-2 hover:border-redonebg hover:text-redonebg hover:shadow-2xl hover:shadow-redonebg hover:bg-white"
          >
            Step 2
          </button>

          <button
            onClick={() => handleStepChange(3)}
            onMouseEnter={() => handleStepChange(3)}
            className="w-[200px] h-[80px] rounded-lg text-white font-extrabold bg-redonebg items-center justify-center hover:border-2 hover:border-redonebg hover:text-redonebg hover:shadow-2xl hover:shadow-redonebg hover:bg-white"
          >
            Step 3
          </button>
        </div>
      </div>

      <div className="p-10">
        <p className="w-full text-3xl font-extrabold text-redonebg text-center mb-[60px]">But why Life Chain University ?</p>
        <StickyScroll content={content} />
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
