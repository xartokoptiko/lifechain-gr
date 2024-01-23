import Head from "next/head";
export default function Travel() {
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
            </div>

            <p className="px-[25px] cursor-pointer py-[10px] text-redonebg font-extrabold bg-white rounded-lg shadow-white shadow-2xl">
              Get the app
            </p>
          </div>
        </div>
        <div className="flex flex-row px-[25px] py-[40px] w-full">
          <div className="flex flex-col w-1/2 items-center justify-center space-y-10">
            <p className="text-4xl text-white font-extrabold">
              Life Chain Travel
            </p>
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
    </>
  );
}
