import Head from "next/head";
import React from "react";

export default function ToU() {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <main className="flex flex-col bg-gradient-to-br to-redonebg  from-redtwobg via-90%">
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
        <div className="flex flex-col items-center h-screen">
          <p className="text-white text-4xl font-extrabold text-center py-10">
            Terms of Use
          </p>
          <div className="flex flex-col w-[500px] h-[600px] justify-center bg-white rounded-2xl shadow-2xl shadow-white">
            <p className="text-xl text-redonebg font-extrabold text-center" >Nothing Here yet !</p>
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
            This site is open source ! find it on {" "}
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
