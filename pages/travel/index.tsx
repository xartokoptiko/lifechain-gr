import Head from "next/head";
import React, { useState } from "react";
import InstructionsText from "@/components/instructions-text";

export default function Travel() {
  const [step, setStep] = useState(1);

  const stepContent = [
    {
      title: "Press the SOS button",
      text: "instructions_one_text",
      imageSrc: "someimage1",
    },
    {
      title: "Provide the {} some information",
      text: "Provid the {} some aditional information like photos or medicine that you might need",
      imageSrc: "someimage2",
    },
    {
      title: "Now wait, Help is comming!",
      text: "Just wait till the countdown finish and the help will be on the way",
      imageSrc: "someimage3",
    },
  ];

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <>
      <Head>
        <title>Lifehain Travel</title>
      </Head>
      <div className=" flex flex-col px-[10] bg-gradient-to-br to-redonebg  from-redtwobg via-90%">
        <div className="flex flex-row px-[40px] py-[30px]">
          <img src="logo.png" className="w-[200px] h-[80px] pr-[35px]" />

          <div className="flex flex-row w-full justify-between items-center text-extrabold text-white ">
            <div className="flex flex-row space-x-5 font-extrabold text-white ">
              <a href="#">Info</a>
              <a href="#">How it works</a>
              <a href="#">Contact us</a>
              <a href="#">Travel agences</a>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <p className="px-[25px] cursor-pointer py-[10px] text-redonebg font-extrabold bg-white rounded-lg shadow-white shadow-2xl">
                Get the app
              </p>
              <p className="px-[25px] cursor-pointer py-[10px] text-redonebg font-extrabold bg-white rounded-lg shadow-white shadow-2xl">
                Login
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[25px] py-[40px] w-full">
          <div className="flex flex-col w-1/2 items-center justify-center space-y-10">
            <p className="text-4xl text-white font-extrabold">
              Life Chain Travel
            </p>
            <div className="flex flex-col w-[300px] h-[5px] bg-white shadow-white shadow-3xl rounded-full"></div>
            <p className="text-xl text-white font-extrabold">
              The safe way to travel
            </p>
            <p className="text-xl text-white font-extrabold">
              Every time everywhere
            </p>
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center">
            <img
              src="/privateapp/privatehome.png"
              className="w-[160px] h-[350px] shadow-white shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row bg-white w-full px-[25px] py-[100px]">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <img
            src="/privateapp/privatemore.png"
            className="w-[160px] h-[350px] shadow-redonebg shadow-2xl rounded-lg"
          />
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <p className="text-3xl text-[#424242] font-extrabold text-center pb-[20px]">
            Enjoy your trip at it's fullest
            <br />
            Feeling safe with
          </p>
          <div className="flex flex-col w-full lg:max-w-[300px] md:max-w-[300px] max-sm:px-[10px] max-sm:items-center">
            <p className="text-lg font-extrabold text-[#424242] mt-[15px] lg:font-bold md:font-bold">
              With just one click
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Alert the travel guide for every emergency
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Usefull words and phrases in the local language
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Keep track of the trip schedule
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Explore local hot destinations
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Embassy and other importand numbers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col xl:py-[50px] px-10
                                      lg:py-[50px]
                                      md:py-[50px]
                                      max-sm:py-[25px]"
      >
        <p className="text-4xl font-extrabold text-redonebg text-center mb-12">
          How it Works
        </p>
        <div
          id="howitworks"
          className="grid grid-cols-3 w-full justify-evenly
                               max-sm:grid-cols-1"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={stepContent[step - 1].imageSrc}
              className="xl:w-[172px] xl:h-[373px] rounded-xl shadow-2xl shadow-redonebg
                           lg:w-[172px] lg:h-[373px]
                           md:w-[155px] md:h-[300px]
                           max-sm:w-[155px] max-sm:h-[300px] max-sm:mb-12"
            />
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <InstructionsText
              title={stepContent[step - 1].title}
              text={stepContent[step - 1].text}
            />
          </div>

          <div className="flex flex-col justify-evenly items-center text-2xl text-white font-extrabold">
            <button
              className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
              onClick={() => handleStepChange(1)}
            >
              Step 1
            </button>
            <button
              className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
              onClick={() => handleStepChange(2)}
            >
              Step 2
            </button>
            <button
              className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
              onClick={() => handleStepChange(3)}
            >
              Step 2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
