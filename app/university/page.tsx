"use client";
import { BackgroundGradientAnimationMin } from "@/components/ui/background-gradient-animation-min";
import BecomeResponer from "@/components/ui/become-responder";
import HeaderUniSection from "@/components/ui/header-section";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IconMenu } from "@tabler/icons-react";
import CenterFeatureSectionUni from "@/components/ui/center-feature-section-uni";
import { LoginModal } from "@/components/login-modal";
import {UserProfileModal} from "@/components/profile-modal";

export default function University() {
  const { user, signInWithEmail, logOut, userDetails } = UserAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  console.log(user);
  console.log(userDetails)

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [step, setStep] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const openProfileodal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

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
        <div className="flex flex-row w-full py-10 px-14 items-center justify-between max-sm:px-4">
          <Link href={"/"}>
            <img
              src="logo.png"
              className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]"
            />
          </Link>
          <div className="flex flex-row items-center justify-center text-white font-extrabold space-x-3 max-sm:hidden">
            <a href="/travel">Travel</a>
            <a href="/#">University</a>
          </div>
          {!user ? (
            <>
              <p
                onClick={openModal}
                className="cursor-pointer text-white font-extrabold text-xl w-[200px] text-center max-sm:hidden"
              >
                Login
              </p>
              <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
            </>
          ) : (
            <>
              <div className="flex flex-row items-center justify-center text-white font-extrabold space-x-3 max-sm:hidden">
                <a
                  onClick={openProfileodal}
                  className="cursor-pointer text-white font-extrabold text-xl text-center max-sm:hidden"
                >
                  profile
                </a>
                <UserProfileModal isModalOpen={isProfileModalOpen} closeModal={closeProfileModal} userDetails={userDetails}/>
                <p
                  onClick={logOut}
                  className="cursor-pointer text-white font-extrabold text-xl  text-center max-sm:hidden"
                >
                  Log out
                </p>
              </div>
            </>
          )}
          <Menu
            as="div"
            className="relative inline-block text-left md:hidden max-sm:visible"
          >
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
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Travel
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        University
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Login
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex flex-row w-full  px-14 max-sm:flex-col max-sm:px-4 max-sm:space-y-6">
          <div className="flex flex-col w-1/2 justify-center max-sm:w-full max-sm:items-center max-sm:text-center">
            <p className="text-6xl/relaxed text-white font-extrabold max-sm:text-3xl">
              <span className="underline">Safer</span> University <br /> Safer
              studies <br /> Better <span className="underline"> future</span>
            </p>
          </div>

          <div className="flex flex-col w-1/2 justify-center max-sm:w-full max-sm:items-center">
            <img
              src="unibghd.png"
              className="w-[800px] h-[400px] max-sm:w-[300px] max-sm:h-[150px]"
            />
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
            <img
              src="iphone.png"
              className="w-[64px] h-[64px] transform translate-x-[16px]"
            />
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
        <CenterFeatureSectionUni />
      </div>
      <div className="flex flex-col w-full items-center justify-center py-[130px]">
        <p className="text-3xl font-extrabold text-red-700 pb-[80px]">
          How it works
        </p>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full">
          <div className="flex flex-col w-full items-end justify-center max-sm:items-center">
            <img
              src={stepContent[step as keyof typeof stepContent].photo}
              className="w-[172px] h-[373px] rounded-xl shadow-2xl shadow-redonebg"
            />
          </div>
          <div className="flex flex-col w-full text-center items-center justify-center space-y-4 max-sm:h-[300px]">
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
                <a href="https://www.instagram.com/lifechain.gr/">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61554962138127&locale=el_GR">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/life-chain-app/">
                  Linked in
                </a>
              </div>
            </div>

            <div className="flex flex-col mt-[35px] items-center">
              <div className="space-y-3 flex flex-col">
                <a href="/travel">Travel</a>
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
