import InstructionsText from "./instructions-text";
import HealthAlertNew from "../svg/healthalertnew.svg";

export default function HowTwo({ onPrevious, onNext }) {
  return (
    <div className="flex flex-row bg-white xl:px-10 xl:min-h-[700px]  py-24 rounded-3xl shadow-2xl items-center
    max-sm:flex-col     max-sm:p-5  max-sm:min-h-[900px] max-sm:justify-evenly
                        lg:px-10    lg:min-h-[600px]
                        md:px-6     md:min-h-[500px]">
      <div className="flex flex-col justify-center items-center w-1/2
                                                                   max-sm:w-full bg-[url('../public/dots.png')] bg-contain bg-center bg-no-repeat">
        <HealthAlertNew
          className="xl:w-[50vh] xl:h-[53vh]
          lg:w-[45vh] lg:h-[48vh]
          md:w-[25vh] md:h-[28vh]
          max-sm:w-[35vh] max-sm:h-[38vh]" />
      </div>

      <div className="flex flex-col justify-center items-center w-1/2
                                                                  max-sm:w-full">
        <img
          src="../../notebook.gif"
          className="w-[128px] h-[128px]
                                                 max-sm:w-[64px] max-sm:h-[64px]"
        />

        <InstructionsText
          title="3. Write a summary of the alert (Optional)"
          text="In case you are able to give some basic information for your alert you can write in down in the text area"
        />

        <InstructionsText
          title="4. Press the “Send help” button"
          text="When you have finished the previous step(optional) just press the send help button."
        />

        <div className="flex flex-row">
          <button
            onClick={onPrevious}
            className="flex-1 mt-10 w-28 bg-deepgreen p-3 rounded-l-2xl mr-3 font-bold text-white"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="flex-1 mt-10 w-28 bg-deepgreen p-3 rounded-r-2xl font-bold text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
