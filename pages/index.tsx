import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col w-full bg-cover"
        style={{ backgroundImage: "url(athens.jpg)" }}
      >
        <div className="flex flex-row w-full items-center py-[25px] px-[55px]">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[200px] h-[80px] mr-[65px]"
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
        <div className="flex flex-col w-full bg-cover items-center justify-center">
          <div className="flex flex-col py-[130px]">
            <p className="text-5xl text-white font-extrabold p-10 rounded-xl bg-black bg-opacity-60 animate-fade-up animate-delay-1000">
              The ultimate greek safety app for everyone
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#d8d8d8] w-full items-center justify-center text-center text-3xl subpixel-antialiased text-[#424242] font-extrabold py-[100px] font-sans">
        <p className="animate-fade-left animate-delay-1000">
          An Application developed to keep you safe <br /> Everywhere every time{" "}
        </p>
        <p className="animate-fade-right animate-delay-1000 mt-[35px] text-sm">
          With just one click
        </p>
      </div>
      <div className="flex flex-row w-full py-[100px]">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <img
            src="/app/photos/homepage.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-blue-800 rounded-xl"
          />
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <div>
            <p className="text-3xl font-extrabold text-[#424242]">
              LifeChain Univeristy
            </p>
            <p className="text-lg font-extrabold text-[#424242] mt-[15px]">
              From students to students
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Alert university guards for every emergency
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Student responders with CPR Certificate
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Call emergency numbers instantly
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Fast help response
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
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
      <div className="flex flex-row w-full py-[100px]">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <div>
            <p className="text-3xl font-extrabold text-[#424242]">
              LifeChain Travel
            </p>
            <p className="text-lg font-extrabold text-[#424242] mt-[15px]">
              For a safe trip
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Alert the travel guide for every emergency
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Usefull words and phrases in the local language
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Keep track of the trip schedule
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Explore local hot destinations
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold">
                  Embassy and other importand numbers
                </p>
              </div>
            </div>
            <div className="flex felx-col w-[140px] h-[40px] mt-[30px] items-center justify-center text-center rounded-xl bg-[#1c50b8] text-white cursor-pointer font-extrabold">
              <p>Learn more</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <img
            src="/app/photos/homeprivate.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-blue-800 rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#d8d8d8] w-full py-[100px] items-center justify-center">
        <p className="text-4xl text-[#424242] font-extrabold mb-[35px]">Our Mission</p>
        <p className="text-lg font-extrabold text-[#424242] text-center mb-[35px]">Our mission is to make life among university students and poeple traveling feel safe wherever they go <br/>
        experiencing day to day task without stress and get the help they need as easy and fast as possible </p>
        <p className="text-2xl text-[#424242] font-extrabold mb-[35px]">But why stop there ?</p>
        <p className="text-lg font-extrabold text-[#424242] text-center">Let's make lifechain everything about life</p>
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
          <p><a href="https://lifechain.gr/privacy">Privacy</a> {"  "} | {"  "} <a href="https://lifechain.gr/tou" >Terms Of use</a></p>
          <p>All rights reserved lifechain.gr 2023 ©</p>
        </div>
    </>
  );
}
