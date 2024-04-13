export default function InstructionsText({title, text} : {title : string , text: string}) {
    return(
        <>
            <div className="flex flex-col xl:max-w-[40vh] max-sm:mb-10
                                          lg:max-w-[40vh]
                                          md:max-w-[20vh]" >
              <p className="text-xl font-extrabold">{title}</p>
              <p className="text-lg">{text}</p>
            </div>
        </>
    );
}