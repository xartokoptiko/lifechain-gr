import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {getUserData, logout} from "../../firebase";

export default function Acount() {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setUser(userData);
      } catch (error) {
        router.push(
          {
            pathname: "/login",
            query: { data: "error" }
          }
        );
      }
    };

    fetchData();
  }, []);

  const handeLogout = async (e) => { 
    e.preventDefault();
    try {
      await logout();
      router.push(
        {
          pathname: "/",
        }
      );
    } catch (error) {
      console.error("Error logging out:", error);
    }
   }

  return (
    <>
      <Head>
        <title>Lifechain University account</title>
      </Head>
      <main className="flex flex-col h-screen w-screen">
        <div className="flex flex-col w-full bg-gradient-to-br to-redonebg  from-redtwobg via-90%">
          <div className="flex flex-row py-[30px] px-[40px] items-center w-full justify-between">
            <div className="flex flex-row">
              <img src="logo.png" className="w-[200px] h-[80px]" />
            </div>
            <div className="flex flex-row space-x-[15px]">
              <div className="px-[50px] py-[10px] bg-white rounded-lg">
                <p className="text-redonebg text-lg font-extrabold">{user.first_name}</p>
              </div>
              <div onClick={handeLogout} className="px-[50px] py-[10px] cursor-pointer bg-white rounded-lg">
                <p className="text-redonebg text-lg font-extrabold">Logout</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 px-[40px] py-[50px] w-full">
            <div className="flex flex-col space-y-[30px] text-white font-extrabold ">
              <p>Name : {user.first_name}</p>
              <p>Last name : {user.last_name}</p>
              <p>Emails : {user.email}</p>
              <p>Phone : {user.phone}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="py-[10px] px-[50px] bg-white rounded-lg">
                <a href="/deleteaccount" className="text-redonebg text-lg font-extrabold">
                  Delete account
                </a>
              </button>
            </div>
          </div>
          {/* FOOTER SECTION */}
          <div
            className="flex flex-col items-center text-center  text-white xl:py-[50px] text-xs font-extrabold
                                                                                        space-y-[20px]"
          >
            <p>Lifechain university</p>
            <p>Email : info@lifechain.gr</p>
            <p>
              This site is open source fint it on
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
        </div>
      </main>
    </>
  );
}
