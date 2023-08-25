import InstructionsText from "./instructions-text";
import HomePageNew from "../svg/homepagenew.svg";

export default function HowOne({ onNext }) {
  return (
    <div className="flex flex-row bg-white xl:px-10 xl:min-h-[700px]  py-24 rounded-3xl shadow-2xl items-center
    max-sm:flex-col     max-sm:p-5  max-sm:min-h-[900px] max-sm:justify-evenly
                        lg:px-10    lg:min-h-[600px]
                        md:px-6     md:min-h-[500px]">
        <div className="flex flex-col justify-center items-center w-1/2
                                                                  max-sm:w-full bg-[url('../public/dots.png')] bg-contain bg-center bg-no-repeat ">
          <HomePageNew className="xl:w-[300px] xl:h-[300px]
                                  lg:w-[300px] lg:h-[300px]
                                  md:w-[300px] md:h-[300px]
                                  max-sm:w-[200px] max-sm:h-[200px]" />
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
