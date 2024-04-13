import Link from "next/link";

export default function Privacy() {
  return (
    <main>
      <main>
        <div className="absolute top-0 right-0 z-50 flex flex-row w-full p-10 text-redonebg font-extrabold items-center justify-between">
          <div className="flex felx-col w-[200px] items-center">
            <Link href={"/"}>
              <img
                src="logored.png"
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
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col h-full w-1/5 border-r-2 border-redonebg rounded-r-lg"></div>

          <div className="flex flex-col h-full w-3/5"></div>

          <div className="flex flex-col h-full w-1/5 border-l-2 border-redonebg rounded-l-lg"></div>
        </div>
      </main>
    </main>
  );
}
