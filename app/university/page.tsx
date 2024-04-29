"use client";
import AimUniContent from "@/components/ui/aim-content";
import { BackgroundGradientAnimationMin } from "@/components/ui/background-gradient-animation-min";
import BecomeResponer from "@/components/ui/become-responder";
import CenterFeatureSections from "@/components/ui/center-feature-section";
import HeaderUniSection from "@/components/ui/header-section";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";
import { useState } from "react";

export default function University() {
  const [step, setStep] = useState(1);

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

  return (
    <main>
      <div className="flex flex-col w-full pb-[100px] items-center bg-gradient-to-br from-red-700 via-red-600 to-purple-700">
        <div className="flex flex-row w-full py-10 px-14 items-center justify-between">
          <Link href={"/"}>
            <img
              src="logo.png"
              className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
            />
          </Link>
          <div className="flex flex-row items-center justify-center text-white font-extrabold space-x-3">
            <a href="/travel">Travel</a>
            <a href="/#">University</a>
          </div>
          <p className="text-white font-extrabold text-xl w-[200px] text-center">
            Login
          </p>
        </div>

        <div className="flex flex-row w-full  px-14">
          <div className="flex flex-col w-1/2 justify-center">
            <p className="text-6xl/relaxed text-white font-extrabold">
              <span className="underline">Safer</span> University <br /> Safer
              studies <br /> Better <span className="underline"> future</span>
            </p>
          </div>

          <div className="flex flex-col w-1/2 justify-center">
            <img src="unibghd.png" className="w-[800px] h-[400px]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7 w-full py-[50px] text-xl font-extrabold text-white text-center">
          <div className="flex flex-col items-center justify-centers space-y-3">
            <p className="max-w-[300px]">
              Fast and accurate emergency response
            </p>
            <img src="timing.png" className="w-[64px] h-[64px]" />
          </div>
          <div className="flex flex-col items-center justify-center w-full space-y-3">
            <p className="max-w-[300px]">
              Every important phone number you will need{" "}
            </p>
            <img src="iphone.png" className="w-[64px] h-[64px]" />
          </div>
          <div className="flex flex-col items-center justify-center w-full space-y-3">
            <p className="max-w-[300px]">
              Track of your travel schedule, so you don’t miss anything{" "}
            </p>
            <img src="calendar.png" className="w-[64px] h-[64px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-14 py-12">
        <HeaderUniSection />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <CenterFeatureSections />
      </div>
      <div className="flex flex-col w-full items-center justify-center py-[130px]">
        <p className="text-3xl font-extrabold text-red-700 pb-[80px]">
          How it works
        </p>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full">
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
      </div>
      <div className="flex flex-col items-center justify-center">
        <AimUniContent />
      </div>

      <div
        id="gettheapp"
        className="flex flex-col bg-gradient-to-br to-redonebg  from-redtwobg via-90% p-10 items-center
                                      "
      >
        <p className="text-4xl font-extrabold text-white text-center mb-10 max-sm:text-2xl">
          Now available on
        </p>
        <div
          className="flex flex-row xl:w-[100vh] justify-evenly
                                        lg:w-[100vh]
                                        md:w-[50vh]
                                        max-sm:w-[40vh]"
        >
          <Link
            href={
              "https://play.google.com/store/apps/details?id=gr.lifechain.app"
            }
          >
            <div className="flex flex-row w-fit text-xl font-extrabold text-white items-center">
              <img
                src="../../google-play.png"
                className="w-[64px] h-[64pxpx]
                           max-sm:w-[32px] max-sm:h-[32px] "
              />

              <p className="text-xl ml-4">Google play</p>
            </div>
          </Link>

          <Link href={"https://apps.apple.com/us/app/lifechain/id6465402686"}>
            <div className="flex flex-row w-fit text-xl font-extrabold text-white items-center">
              <img
                src="../../app-store.png"
                className="w-[64px] h-[64pxpx]
                              max-sm:w-[32px] max-sm:h-[32px]"
              />

              <p className="text-xl ml-4">App store</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
          <BecomeResponer />
      </div>
      <BackgroundGradientAnimationMin>
        <footer className="flex flex-col w-full px-[25px] max-sm:px-[10px] py-[15px]">
          <div className="grid grid-cols-4 max-sm:grid max-sm:grid-cols-3 max-sm:gap-4 gap-10 max-sm:text-xs w-full text-white ">
            <div className="flex flex-col max-sm:col-span-3 max-sm:items-center max-sm:justify-center">
              <img
                src="logo.png"
                className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px] max-sm:mr-[0px]"
              />
            </div>

            <div className="flex flex-col max-sm:w-full mt-[35px] items-center">
              <div className="space-y-3 flex flex-col">
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

            <div className="flex flex-col col-span-4 max-sm:col-span-3 items-center justify-end mt-[100px]">
              <p>lifechainsocial@gmail.com</p>
              <p>All right reserved www.lifechain.gr</p>
            </div>
          </div>
        </footer>
      </BackgroundGradientAnimationMin>
    </main>
  );
}
