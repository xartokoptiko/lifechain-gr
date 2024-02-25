import { loginWithEmailAndPassword } from "../firebase"
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const data = router.query.data;

  useEffect(() => {
    const checkError = async () => {
      if (data === "error") {
        alert("An error occured ! Please check your credentials or try again later.");
      }
    };

    checkError();
  }, []);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const userUID = await loginWithEmailAndPassword(email, password);
      console.log(userUID);
      router.push({
        pathname: "/account",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex flex-col bg-gradient-to-br to-redonebg  from-redtwobg via-90% w-full h-screen items-center justify-center">
        <div className="flex flex-col space-y-[20px] justify-center">
          <img src="logo.png" className="w-[200px] h-[80px]" />
          <form className="flex flex-col space-y-6" onSubmit={handleLogin}>
            <input
              className="py-[5px] px-[10px] rounded-lg text-redonebg font-extrabold"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="py-[5px] px-[10px] rounded-lg text-redonebg font-extrabold"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              value="login"
              type="submit"
              className="py-[7px] cursor-pointer text-redonebg font-extrabold bg-white rounded-lg"
            />
          </form>
        </div>
      </main>
    </>
  );
}
