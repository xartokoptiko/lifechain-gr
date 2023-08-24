import InstructionsText from "./instructions-text";
import HomePageNew from "../svg/homepagenew.svg";

export default function HowOne({ onNext }) {
  return (
      <div className="flex flex-row bg-white p-10 pt-24 pb-24 rounded-3xl shadow-2xl items-center
                           max-sm:flex-col     max-sm:p-5">
        <div className="flex flex-col justify-center items-center w-1/2
                                                                  max-sm:w-full">
          <HomePageNew className="xl:w-[50vh] xl:h-[53vh]
                                  lg:w-[45vh] lg:h-[48vh]
                                  md:w-[25vh] md:h-[28vh]
                                  max-sm:w-[35vh] max-sm:h-[38vh]" />
        </div>

        <div className="flex flex-col justify-center items-center w-1/2
                                                                  max-sm:w-full">
        <img
              src="../../click.gif"
              className="w-[128px] h-[128px]
                                                 max-sm:w-[64px] max-sm:h-[64px]"
            />
          <InstructionsText
            title="1) Press The Allert button"
            text="Press the allert button that suits your situation best"
          />

          <button onClick={onNext} className="flex-1 mt-10 w-28 bg-deepgreen p-3 rounded-full font-bold text-white">
            Next
          </button>
        </div>
      </div>
  );
}
