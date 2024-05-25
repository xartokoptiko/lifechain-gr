"use client";

import FeatureSection from "@/components/feature-section";
import { BackgroundGradientAnimationMin } from "@/components/ui/background-gradient-animation-min";
import CenterFeatureSections from "@/components/ui/center-feature-section";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Menu, Transition } from '@headlessui/react'
import {IconMenu} from "@tabler/icons-react";

export default function Travel() {

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

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
        <div className="flex flex-row py-10 px-14 items-center justify-between max-sm:px-4">
          <Link href={"/"}>
            <img
              src="logo.png"
              className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
            />
          </Link>
          <div className="flex flex-row items-center justify-center text-white font-extrabold space-x-3 max-sm:hidden">
            <a href="#">Travel</a>
            <a href="/university">University</a>
          </div>
          <p className="text-white font-extrabold text-xl w-[200px] text-center max-sm:hidden">
            Safe travel, happy travel
          </p>
          <Menu as="div" className="relative inline-block text-left md:hidden max-sm:visible">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <IconMenu />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>

        <div className="flex flex-row w-full px-14 max-sm:flex-col max-sm:px-4">
          <div className="flex flex-col w-1/2 justify-center max-sm:mb-16">
            <p className="pl-[30px] text-8xl max-sm:text-5xl font-extrabold text-white max-sm:w-full">
              We
              <br />
              Make <span className="underline">your</span>
              <br />
              Travel
              <br />
              <span className="underline">Safer</span>
            </p>
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
            <img src="welcome_compo.png" className="w-[500px] h-[700px] max-sm:w-[300px] max-sm:h-[500px]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7 w-full py-[50px] text-xl font-extrabold text-white text-center max-sm:grid-cols-1">
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
        <p className="text-3xl font-extrabold text-red-700 pb-[80px]">
          How it works
        </p>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full max-sm:gap-10">
          <div className="flex flex-col w-full items-end justify-center max-sm:justify-center max-sm:items-center">
            <img
              src={stepContent[step as keyof typeof stepContent].photo}
              className="w-[172px] h-[373px] rounded-xl shadow-2xl shadow-redonebg"
            />
          </div>
          <div className="flex flex-col w-full text-center items-center justify-center space-y-4 max-sm:h-[200px]">
            <p className="font-extrabold text-lg w-[200px]">
              {stepContent[step as keyof typeof stepContent].title}
            </p>
            <p className="w-[200px]">
              {stepContent[step as keyof typeof stepContent].description}{" "}
            </p>
          </div>
          <div className="flex flex-col justify-between  w-full max-sm:items-center max-sm:space-y-6">
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

      <div className="flex flex-col items-center justify-center py-[120px] w-full">
        <div className="font-[sans-serif] text-[#333]">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold">Meet our team</h2>
              <p className="text-sm mt-4 leading-relaxed">Behind safety</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-10 text-center mt-12">
              <div>
                <img
                  src="https://media.licdn.com/dms/image/D5603AQGCuZf7ZlhK9A/profile-displayphoto-shrink_200_200/0/1678961424045?e=1721865600&v=beta&t=wtKLoFs07gCNsrJRiZHMygKs-pl3_9fTBn_QC6nVMnc"
                  className="w-32 h-32 rounded-full inline-block"
                />
                <div className="py-4">
                  <h4 className="text-base font-extrabold">Enri Skourti</h4>
                  <p className="text-xs mt-1">Software Engineer</p>
                  <div className="space-x-4 mt-4">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQEPFGWcSzJ-aA/profile-displayphoto-shrink_200_200/0/1668089274269?e=1721865600&v=beta&t=u3atFrtskfjSbWMUvZqhxwol3W2yFOf_DZO4-dQKWvk"
                  className="w-32 h-32 rounded-full inline-block"
                />
                <div className="py-4">
                  <h4 className="text-base font-extrabold">Andreas Krassas</h4>
                  <p className="text-xs mt-1">Marketing Director</p>
                  <div className="space-x-4 mt-4">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQFYe1Be843rSQ/profile-displayphoto-shrink_200_200/0/1698668401443?e=1721865600&v=beta&t=_6KAkvEvKYe65s9zcon7MLtvadTbQPtHpRzw_pRefSk"
                  className="w-32 h-32 rounded-full inline-block"
                />
                <div className="py-4">
                  <h4 className="text-base font-extrabold">Alkinnos Allissandrakis</h4>
                  <p className="text-xs mt-1">Software Engineer</p>
                  <div className="space-x-4 mt-4">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQExudEM8-w1vA/profile-displayphoto-shrink_200_200/0/1679926347771?e=1721865600&v=beta&t=0345Zf3CcfZYHjlKyWe7ISY0ilijqkMBxHorcmV--BU"
                  className="w-32 h-32 rounded-full inline-block"
                />
                <div className="py-4">
                  <h4 className="text-base font-extrabold">Lampros Karachristos</h4>
                  <p className="text-xs mt-1">Software Engineer</p>
                  <div className="space-x-4 mt-4">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                <a href="https://www.instagram.com/lifechain.gr/">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61554962138127&locale=el_GR">Facebook</a>
                <a href="https://www.linkedin.com/company/life-chain-app/">Linked in</a>
              </div>
            </div>

            <div className="flex flex-col mt-[35px] items-center">
              <div className="space-y-3 flex flex-col">
                <a about="Redirecting to Travel" href="/travel">Travel</a>
                <a href="/university">University</a>
                <a href="/login">Login</a>
              </div>
            </div>

            <div className="flex flex-col mt-[35px] items-center">
              <div className="space-y-3 flex flex-col">
                <a href="/privacy">Privacy Policy</a>
                <a href="/tou">Terms of use</a>
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
