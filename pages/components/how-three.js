import InstructionsText from "./instructions-text";
import Docs from "../svg/docs.svg";

export default function HowTwo({ onPrevious }) {
  return (
    <div className="flex flex-row bg-white xl:px-10 xl:min-h-[700px]  py-24 rounded-3xl shadow-2xl items-center
    max-sm:flex-col     max-sm:p-5  max-sm:min-h-[900px] max-sm:justify-evenly
                        lg:px-10    lg:min-h-[600px]
                        md:px-6     md:min-h-[500px]">
      <div className="flex flex-col justify-center items-center w-1/2
                                                                  max-sm:w-full">
        <Docs className="xl:w-[50vh] xl:h-[53vh]
                                  lg:w-[45vh] lg:h-[48vh]
                                  md:w-[25vh] md:h-[28vh]
                                  max-sm:w-[35vh] max-sm:h-[38vh]" />
      </div>

      <div className="flex flex-col justify-center items-center w-1/2
                                                                  max-sm:w-full">
        <p className=" text-3xl font-extrabold text-deepblue text-center">
          And wait for the countdown to finish !
        </p>
        <p className="mt-5 mb-5 text-xl font-extrabold text-deepblue">
          Need more instructions ?
        </p>
        <div
          className="flex bg-yellow xl:w-[30vh] xl:h-[2vh] rounded-3xl mb-5
                                               lg:w-[30vh] lg:h-[2vh]
                                               md:w-[25vh] md:h-[1vh]"
        ></div>
        <a
          href="/university/docs"
          className="bg-dark-blue p-3 px-5 rounded-2xl"
        >
          <p className="text-2xl text-yellow">Read The docs</p>
        </a>

        <button onClick={onPrevious} className="flex-1 mt-10 w-28 bg-deepgreen p-3 rounded-2xl mr-3 font-bold text-white">
          Previous
        </button>
      </div>
    </div>
  );
}
