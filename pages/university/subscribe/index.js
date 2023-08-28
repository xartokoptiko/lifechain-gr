import Head from "next/head";

export default function Subscribe() {
  return (
    <>
      <Head>
        <title>Subscribed</title>
      </Head>
      <main className="bg-gradient-to-br to-redonebg  from-redtwobg via-90% ">
        <div className="justify-center items-center text-center">
          <div className="flex flex-row p-8 items-center w-screen">
            <div className="flex flex-row items-center">
              <img src="../../logo.png" className="w-[200px] h-[80px]" />
            </div>
            <div className="flex flex-row items-center ml-14 text-white text-lg font-bold">
              <a className="mr-5" href="https://lifechain.gr">
                Home
              </a>
            </div>
          </div>
          <div
            className="flex flex-row p-10 xl:h-[80vh]
                               max-sm:flex-col lg:h-[70vh]
                                               md:h-[50vh]"
          >
            <div
              className="flex flex-col text-center w-1/2 items-center justify-evenly text-3xl font-extrabold text-white
                                                      max-sm:w-full"
            >
              <p className="text-5xl text-white font-extrabold max-sm:mb-10">
                Thanks for Subscribing !
              </p>
            </div>

            <div
              className="flex flex-col w-1/2 items-center justify-center
                                          max-sm:w-full"
            >
              <img
                src="../../homepage.png"
                className="w-[172px] h-[373px] rounded-xl shadow-2xl shadow-white"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-evenly text-center text-white xl:h-[50vh] text-xs font-extrabold
                          lg:h-[40vh]
                                                                                        md:h-[20vh]
                                                                                        max-sm:h-[30vh]"
        >
          <p>Lifechain university</p>
          <p>Email : info@lifechain.gr</p>
          <p>
            This site is open source , find it on github
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
          <p>All rights reserved lifechain.gr 2023 ©</p>
        </div>
      </main>
    </>
  );
}
