export default function LoginPageApp({onNext}) {
  return (
    <>
      <div className="flex flex-col w-[172px] h-[372px] bg-white rounded-xl shadow-2xl shadow-white items-center">
        <img src="../../app/statusbar.png" className="w-[172px] h-[20px]" />
        <img
          src="../../app/applogo.png"
          className="w-[120px] h-[50px] mt-[30px]"
        />
        <img
          src="../../app/unilogo.jpg"
          className="w-[60px] h-[60px] mt-[5px]"
        />
        <input placeholder="username" type="text" className="flex p-1 text-root text-xs flex-col w-[120px] h-[30px] border-root border-2 rounded-md mt-[25px]"
        />
        <input placeholder="password" type="text" className="flex p-1 text-root text-xs flex-col w-[120px] h-[30px] border-root border-2 rounded-md mt-[30px]"
        />
        <button onClick={onNext} className="text-[10px] text-white font-extrabold text-center items-center bg-redapp w-[130px] h-[30px] rounded-2xl mt-[30px]" >Log in</button>
      </div>
    </>
  );
}
