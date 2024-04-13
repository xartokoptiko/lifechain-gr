export default function HealthPageApp({ onCancel, onSendHelp }) {
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
          <p className="text-[11px] text-center w-[150px] text-black font-extrabold mt-[15px]">
            Write a description of the incident (Optional)
          </p>
          <textarea className="w-[150px] text-[10px] font-extrabold text-black h-[100px] bg-root rounded-xl mt-[15px] resize-none p-3" />
  
          <div className="flex flex-row items-center w-[90px] justify-between mt-[15px]">
            <img src="../../app/photo.png" className="w-[20px] h-[20px]" />
            <img
              src="../../app/image.png"
              className="w-[20px] h-[20px] mr-[8px]"
            />
          </div>
          <button onClick={onSendHelp} className="text-[10px] text-white font-extrabold text-center items-center bg-redapp w-[130px] h-[30px] rounded-2xl mt-[20px]" >Send help</button>
          <button onClick={onCancel} className="text-[10px] text-redapp font-extrabold text-center items-center bg-root w-[130px] h-[30px] rounded-2xl mt-[10px]" >Cancel</button>
        </div>
      </>
    );
  }