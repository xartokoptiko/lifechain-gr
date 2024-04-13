export default function HomePageApp({ onHealthClick }) {
    return (
      <>
        <div className="flex flex-col w-[172px] h-[372px] bg-white rounded-xl shadow-2xl shadow-white items-center">
          <img src="../../app/statusbar.png" className="w-[172px] h-[20px]" />
          <div className="flex flex-row items-center w-[172px] justify-between mt-[10px]">
            <img
              src="../../app/applogo.png"
              className="w-[80px] h-[34px] ml-[10px]"
            />
            <img
              src="../../app/menu.png"
              className="w-[24px] h-[24px] mr-[10px]"
            />
          </div>
          <p className="text-center text-black font-extrabold text-[9px] mt-[15px]">
            Press the alert button you need
          </p>
          <button
            onClick={onHealthClick}
            className="text-[10px] text-white font-extrabold text-center items-center bg-redapp w-[150px] h-[30px] rounded-2xl mt-[30px]"
          >
            Health insident
          </button>
          <button
            disabled={true}
            className="text-[10px] text-white font-extrabold text-center items-center bg-redapp w-[150px] h-[30px] rounded-2xl mt-[30px]"
          >
            Physical attack
          </button>
          <button
            disabled={true}
            className="text-[10px] text-white font-extrabold text-center items-center bg-redapp w-[150px] h-[30px] rounded-2xl mt-[30px]"
          >
            Thieft-vandalism
          </button>
  
          <div className="flex flex-row bg-root w-[150px] h-[35px] rounded-md mt-[45px] justify-between items-center">
            <img
              src="../../app/application.png"
              className="w-[15px] h-[15px] ml-[8px]"
            />
            <img src="../../app/home.png" className="w-[15px] h-[15px]" />
            <img
              src="../../app/phone.png"
              className="w-[15px] h-[15px] mr-[8px]"
            />
          </div>
        </div>
      </>
    );
  }