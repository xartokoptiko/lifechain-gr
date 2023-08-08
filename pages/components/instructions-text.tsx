export default function InstructionsText({title, text} : {title : string , text: string}) {
    return(
        <>
            <div className="flex flex-col max-w-[40vh] max-sm:mb-10" >
              <p className="text-xl font-extrabold">{title}</p>
              <p className="text-lg">{text}</p>
            </div>
        </>
    );
}