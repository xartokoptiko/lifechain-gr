"use client";

import FeatureSection from "@/components/feature-section";
import { BackgroundGradientAnimationMin } from "@/components/ui/background-gradient-animation-min";
import CenterFeatureSections from "@/components/ui/center-feature-section";
import { useState } from "react";

export default function Travel() {
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
      <div className="flex flex-col w-full pb-[100px] bg-gradient-to-br from-red-700 via-red-600 to-purple-700">
        <div className="flex flex-row py-10 px-14 items-center justify-between">
          <img
            src="logo.png"
            className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
          />
          <div className="flex flex-row items-center justify-center text-white font-extrabold space-x-3">
            <a href="#">Travel</a>
            <a href="/university">University</a>
          </div>
          <p className="text-white font-extrabold text-xl w-[200px] text-center">
            Safe travel, happy travel
          </p>
        </div>

        <div className="flex flex-row w-full px-14">
          <div className="flex flex-col w-1/2 justify-center">
            <p className="pl-[30px] text-8xl font-extrabold text-white">
              We
              <br />
              Make <span className="underline">your</span>
              <br />
              Travel
              <br />
              <span className="underline">Safer</span>
            </p>
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center">
            <img src="welcome_compo.png" className="w-[500px] h-[700px]" />
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
      <div className="flex flex-col w-full items-center justify-center">
        <FeatureSection />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <CenterFeatureSections />
      </div>
      <div className="flex flex-col w-full items-center justify-center py-[130px]">
        <p className="text-3xl font-extrabold text-red-700 pb-[80px]">How it works</p>
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
