import Head from "next/head";
import { useRouter } from "next/router";
import {deleteAccount} from "../../firebase";
import { useEffect, useState } from "react";
import {getUserData} from "../../firebase";

export default function Deleteaccount() {
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userData = await getUserData();
          } catch (error) {
            router.push(
              {
                pathname: "/login",
                query: { data: "error" }
              }
            );
          }
        };
    
        fetchData();
      }, []);

    const handleDelete = async (e) => {
        try {
            e.preventDefault();
            const confirmed = window.confirm("Are you sure you want to delete your account?");
            if (!confirmed) {
                reutrn
            }else {
                var passsword = prompt("Please enter your password to delete your account");
                const deleted = await deleteAccount(passsword);
                console.log(deleted);
                if (deleted === true) {
                    alert("Your account has been deleted");
                    router.push({
                        pathname: "/",
                    });
                }else {
                    alert("Something went wrong, check your password or try again later.");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Head>
                <title>Delete Lifechain account</title>
            </Head>
            <div className="flex flex-col w-full space-y-[20px] h-screen items-center justify-center bg-gradient-to-br to-redonebg  from-redtwobg via-90%" > 
                <p className="text-white text-lg font-extrabold">By pressing the following button you can delete your lifechain account perminantly</p>
                <button onClick={handleDelete} className="bg-white rounded-lg text-redonebg px-[30px] py-[10px] font-extrabold">Delete my account</button>
            </div>
        </>
    );
}