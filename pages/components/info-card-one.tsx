export default function InfoCardOne({ url, text } : {url : string, text:string}) {
  return (
    <>
      <div
        className="flex flex-row p-5 xl:max-w-[50vh] xl:max-h-[25vh] xl:text-xl font-extrabold bg-graywhite rounded-2xl shadow-2xl
                                        lg:max-w-[50vh] lg:max-h-[25vh] lg:text-xl
                                        md:max-w-[25vh] md:max-h-[13vh] md:text-md
                                    max-sm:min-w-[30vh] max-sm:min-h-[10vh] max-sm:text-sm max-sm:mb-10"
      >
        <div className="flex h-full justify-start items-end">
          <img src={url} className="min-w-[32px] min-h-[32px] mr-3" />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
}
