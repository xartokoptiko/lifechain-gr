import Head from "next/head";

export default function Docs() {
    return(
        <>
            <Head>
                <title>Lifechain Docs</title>
            </Head>
            <main className="flex flex-col h-[100vh] w-full items-center justify-center">
                <div className="text-3xl shadow-2xl font-extrabold max-w-[60vh] text-center p-10">
                <p >The app is still under development so there are no published docs yet :(</p>
                <a href="/" className="text-sm text-zinc-500 underline">Back home</a>
                </div>
            </main>
        </>
    );
}