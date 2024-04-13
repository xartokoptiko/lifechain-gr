export default function AlertPageApp({ onCancel }) {
    return (
      <>
        <div className="flex flex-col w-[172px] h-[372px] bg-white rounded-xl shadow-2xl shadow-white items-center">
          <img src="../../app/statusbar.png" className="w-[172px] h-[20px]" />
          <div className="flex flex-row items-center w-[172px] justify-between mt-[10px]">
            <img
              src="../../app/applogo.png"
              className="w-[100px] h-[40px] ml-[10px]"
            />
            <img
              src="../../app/menu.png"
              className="w-[30px] h-[30px] mr-[10px]"
            />
          </div>
          <div className="flex flex-col text-center justify-center w-[172px] mt-[90px]">
              <p className="text-[7px] font-extrabold text-black">We have send the incident to the guards</p>
              <p className="text-[14px] font-extrabold text-black mt-[5px]">Soon someone will be with you</p>
          </div>
  
          <button onClick={onCancel} className="text-[10px] text-white font-extrabold text-center items-center bg-redapp w-[130px] h-[30px] rounded-2xl mt-[80px]" >cancel</button>
        </div>
      </>
    );
  }