import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import { Dropdown, Avatar, Grid, User } from "@nextui-org/react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);
  const { t } = useTranslation("common");

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const toggleAlert = (text) => {
    alert(text);
  };

  return (
    <>
      <Head>
        <title>Lifechain</title>
      </Head>
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
              <a href="/university">{t("uni")}</a>
              <a href="/travel">{t("trav")}</a>
              {/* <a>About us</a> */}
            </div>
            <div className="flex flex-row space-x-4 items-center justify-center max-sm:mr-[15px]">
              <p
                onClick={() => {
                  toggleAlert("This action is not yet suppoerted");
                }}
                className="px-[25px] cursor-pointer py-[10px] text-blue-900 font-extrabold opacity-80 bg-white rounded-lg shadow-white shadow-2xl"
              >
                {t("responder")}
              </p>
              <div>
                <Dropdown>
                  <Dropdown.Trigger>
                    <button className="rounded-full p-3 bg-white opacity-80 shadow-2xl ">
                      <p className=" font-extrabold text-blue-900">
                        {t("lang")}
                      </p>
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link href="/" locale="en">
                        <h2>English</h2>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/" locale="gr">
                        <h2>Ελληνικά</h2>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-[20px] py-[30px] items-center md:hidden lg:hidden xl:hidden">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[150px] h-[70px] lg:mr-[45px] md:mr-[35px]"
          />
          <div className="flex flex-row space-x-4">
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
                  className={`${
                    isHidden ? "hidden" : ""
                  } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
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
                      {t("uni")}
                    </a>
                    <a
                      href="/travel"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-1"
                    >
                      {t("trav")}
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-2"
                    >
                      {t("responder")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Trigger>
                  <button className="rounded-full p-3 bg-white opacity-80 shadow-2xl ">
                    <p className=" font-extrabold text-blue-900">{t("lang")}</p>
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link href="/" locale="en">
                      <h2>English</h2>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/" locale="gr">
                      <h2>Ελληνικά</h2>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-cover items-center justify-center max-sm:px-[20px]">
          <div className="flex flex-col 2xl:py-[240px] py-[130px] max-sm:py-[280px]">
            <p
              className="xl:text-5xl text-white font-extrabold p-10 rounded-xl bg-black bg-opacity-60 animate-fade-up animate-delay-1000
      lg:text-3xl md:text-3xl text-center"
            >
              {t("catchphrase")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#d8d8d8] w-full items-center justify-center text-center text-3xl subpixel-antialiased text-[#424242] font-extrabold py-[100px] font-sans max-sm:px-[15px] 2xl:py-[150px]">
        <p className="animate-fade-left animate-delay-1000">
          {t("app_one")} <br /> {t("app_two")}{" "}
        </p>
        <p className="animate-fade-right animate-delay-1000 mt-[35px] text-sm">
          {t("app_three")}
        </p>
      </div>
      <div className="flex flex-row w-full py-[100px] max-sm:flex-col">
        <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[100px]">
          <img
            src="/app/photos/homepage.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-blue-800 rounded-xl 2xl:w-[210px] 2xl:h-[450px]"
          />
        </div>
        <div className="flex flex-col w-1/2 items-center max-sm:w-full">
          <div className="flex flex-col w-full lg:max-w-[300px] md:max-w-[300px] max-sm:px-[10px] max-sm:items-center">
            <p className="text-3xl font-extrabold text-[#424242]">
              Life Chain University
            </p>
            <p className="text-lg font-extrabold text-[#424242] mt-[15px]">
              {t("uni_app_catch")}
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("uni_app_one")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("uni_app_two")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("uni_app_three")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("uni_app_four")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("uni_app_five")}
                </p>
              </div>
            </div>
            <a
              href="/university"
              className="flex felx-col px-[20px] py-[10px] mt-[30px] items-center justify-center text-center rounded-xl bg-[#1c50b8] text-white cursor-pointer font-extrabold"
            >
              <p>{t("learn")}</p>
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
              {t("trav_app_catch")}
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("trav_app_one")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("trav_app_two")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("trav_app_three")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("trav_app_four")}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  {t("trav_app_five")}
                </p>
              </div>
            </div>
            <a
              href="/travel"
              className="flex felx-col px-[20px] py-[10px] mt-[30px] items-center justify-center text-center rounded-xl bg-[#1c50b8] text-white cursor-pointer font-extrabold"
            >
              <p>{t("learn")}</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 max-sm:w-full">
          <img
            src="/app/photos/homeprivate.png"
            className="w-[172px] h-[372px] shadow-2xl shadow-blue-800 rounded-xl 2xl:w-[210px] 2xl:h-[450px]"
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#d8d8d8] w-full py-[100px] items-center justify-center max-sm:px-[15px] 2xl:py-[120px]">
        <p className="text-4xl text-[#424242] font-extrabold mb-[35px]">
          {t("mission")}
        </p>
        <p className="text-lg font-extrabold text-[#424242] text-center mb-[35px] lg:max-w-[600px] md:max-w-[600px]">
          {t("mission_all")}
        </p>
        <p className="text-2xl text-[#424242] text-center font-extrabold mb-[35px]">
          {t("stop")}
        </p>
        <p className="text-lg font-extrabold text-[#424242] text-center">
          {t("lifechain_mission")}
        </p>
      </div>
      <div
        className="flex flex-col items-center text-center bg-[#1c50b8] text-white xl:py-[50px] text-xs font-extrabold
                                                                                        lg:py-[50px]
                                                                                        md:py-[50px]
                                                                                        max-sm:py-[25px]
                                                                                        space-y-[20px]"
      >
        <p>Life Chain</p>
        <p>Email : lifechainsocial@gmail.com</p>
        <p>
          {t("open")}{" "}
          <a href="https://github.com/xartokoptiko/lifechain-gr">github</a>
        </p>
        <div
          className="flex flex-row justify-evenly w-[35vh] align-middle items-center
                                                    max-sm:w-[30vh]
                                                    lg:w-[35vh]
                                                    md:w-[20vh]"
        >
          <a href="https://www.instagram.com/lifechain.gr">
            <img src="../../instagram.png" className="w-[32px] h-[32px]" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554962138127">
            <img src="../../facebook.png" className="w-[32px] h-[32px]" />
          </a>
          <a href="https://www.linkedin.com/company/life-chain-app/">
            <img src="../../linkedin.png" className="w-[32px] h-[32px]" />
          </a>
          <a href="https://github.com/xartokoptiko/lifechain-gr">
            <img src="../../github.png" className="w-[32px] h-[32px]" />
          </a>
        </div>
        <p>
          <a href="/privacy">{t("privacy")}</a> {"  "} | {"  "}{" "}
          <a href="/tou">{t("tou")}</a>
        </p>
        <p>{t("right")}</p>
      </div>
    </>
  );
}
