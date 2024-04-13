import { BackgroundGradientAnimationMin } from "@/components/ui/background-gradient-animation-min";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function University() {
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
      <div className="flex flex-col w-full pt-[180px] items-center justify-center">
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
            <a
              href="/university"
              className="flex felx-col px-[20px] py-[10px] mt-[30px] items-center justify-center text-center rounded-xl bg-red-500 text-white cursor-pointer font-extrabold"
            >
              <p>learn</p>
            </a>
          </div>
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
