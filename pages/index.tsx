import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };


  return (
    <>
      <div
        className="flex flex-col w-full bg-cover"
        style={{ backgroundImage: "url(athens.jpg)" }}
      >
        <div className="flex flex-row w-full items-center py-[25px] lg:px-[40px] md:px-[35px] max-sm:hidden">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[200px] h-[80px] lg:mr-[45px] md:mr-[35px]"
          />
          <div className="flex flex-row w-full items-center justify-between text-white text-md font-extrabold">
            <div className="flex flex-row items-center space-x-6">
              <a href="/university">University</a>
              <a>Travel</a>
              <a>About us</a>
            </div>
            <p className="px-[10px] py-[15px] rounded-xl bg-white bg-opacity-80 text-blue-900 cursor-pointer">
              Become a responder
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-[20px] py-[30px] items-center md:hidden lg:hidden xl:hidden">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[150px] h-[70px] lg:mr-[45px] md:mr-[35px]"
          />
          <div className="relative inline-block text-left">
            <div>
              <img
                src="/menu-two.png"
                className="w-[50px] h-[50px] inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleHidden}
              />

              <div
                className={`${isHidden ? 'hidden' : ''} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="/university"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Univeristy
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Travel
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    Become a responder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-cover items-center justify-center max-sm:px-[20px]">
          <div className="flex flex-col 2xl:py-[200px] py-[130px] max-sm:py-[280px]">
            <p
              className="xl:text-5xl text-white font-extrabold p-10 rounded-xl bg-black bg-opacity-60 animate-fade-up animate-delay-1000
            lg:text-3xl md:text-3xl text-center"
            >
              The ultimate greek safety app for everyone
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#d8d8d8] w-full items-center justify-center text-center text-3xl subpixel-antialiased text-[#424242] font-extrabold py-[100px] font-sans max-sm:px-[15px]">
        <p className="animate-fade-left animate-delay-1000">
          An Application developed to keep you safe <br /> Everywhere every time{" "}
        </p>
        <p className="animate-fade-right animate-delay-1000 mt-[35px] text-sm">
          With just one click
        </p>
      </div>
      <div className="flex flex-row w-full py-[100px] max-sm:flex-col">
        <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[100px]">
          <img
            src="/app/photos/homepage.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-blue-800 rounded-xl"
          />
        </div>
        <div className="flex flex-col w-1/2 items-center max-sm:w-full">
          <div className="flex flex-col w-full lg:max-w-[300px] md:max-w-[300px] max-sm:px-[10px] max-sm:items-center">
            <p className="text-3xl font-extrabold text-[#424242]">
              LifeChain Univeristy
            </p>
            <p className="text-lg font-extrabold text-[#424242] mt-[15px]">
              From students to students
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Alert university guards for every emergency
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Student responders with CPR Certificate
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Call emergency numbers instantly
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Fast help response
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Easy for everyone to use
                </p>
              </div>
            </div>
            <div className="flex felx-col w-[140px] h-[40px] mt-[30px] items-center justify-center text-center rounded-xl bg-[#1c50b8] text-white cursor-pointer font-extrabold">
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full py-[100px] max-sm:flex-col">
        <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[100px]">
          <div className="flex flex-col w-full lg:max-w-[300px] md:max-w-[300px] max-sm:px-[10px] max-sm:items-center">
            <p className="text-3xl font-extrabold text-[#424242] lg:font-bold md:font-bold">
              LifeChain Travel
            </p>
            <p className="text-lg font-extrabold text-[#424242] mt-[15px] lg:font-bold md:font-bold">
              For a safe trip
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
            <div className="flex felx-col w-[140px] h-[40px] mt-[30px] items-center justify-center text-center rounded-xl bg-[#1c50b8] text-white cursor-pointer font-extrabold">
              <p>Learn more</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 max-sm:w-full">
          <img
            src="/app/photos/homeprivate.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-blue-800 rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#d8d8d8] w-full py-[100px] items-center justify-center max-sm:px-[15px]">
        <p className="text-4xl text-[#424242] font-extrabold mb-[35px]">
          Our Mission
        </p>
        <p className="text-lg font-extrabold text-[#424242] text-center mb-[35px] lg:max-w-[600px] md:max-w-[600px]">
          Our mission is to make life among university students and poeple
          traveling feel safe wherever they go <br />
          experiencing day to day task without stress and get the help they need
          as easy and fast as possible{" "}
        </p>
        <p className="text-2xl text-[#424242] font-extrabold mb-[35px]">
          But why stop there ?
        </p>
        <p className="text-lg font-extrabold text-[#424242] text-center">
          Let's make lifechain everything about life
        </p>
      </div>
      <div
        className="flex flex-col items-center text-center bg-[#1c50b8] text-white xl:py-[50px] text-xs font-extrabold
                                                                                        lg:py-[50px]
                                                                                        md:py-[50px]
                                                                                        max-sm:py-[25px]
                                                                                        space-y-[20px]"
      >
        <p>Lifechain university</p>
        <p>Email : info@lifechain.gr</p>
        <p>
          this site is open source ! Find it on github
          <a href="https://github.com/xartokoptiko/lifechain-gr">github</a>
        </p>
        <div
          className="flex flex-row justify-evenly w-[35vh] align-middle items-center
                                                    max-sm:w-[30vh]
                                                    lg:w-[35vh]
                                                    md:w-[20vh]"
        >
          <img src="../../linkedin.png" className="w-[32px] h-[32px]" />
          <img src="../../twitter.png" className="w-[32px] h-[32px]" />
          <img src="../../facebook.png" className="w-[32px] h-[32px]" />
          <a href="https://github.com/xartokoptiko/lifechain-gr">
            <img src="../../github.png" className="w-[32px] h-[32px]" />
          </a>
        </div>
        <p>
          <a href="https://lifechain.gr/privacy">Privacy</a> {"  "} | {"  "}{" "}
          <a href="https://lifechain.gr/tou">Terms Of use</a>
        </p>
        <p>All rights reserved lifechain.gr 2023 ©</p>
      </div>
    </>
  );
}
