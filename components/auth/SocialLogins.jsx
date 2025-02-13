"use client";
import Image from "next/image";
import googleLogo from "@/public/google.png";
import fbLogo from "@/public/fb.png";

//If we import in Server component
// import { signIn } from "@/auth";

//If we import in Client component
import { signIn } from "next-auth/react";

const SocialLogins = () => {
  const handleAuth = (event) => {
    signIn("google", { callbackUrl: "http://localhost:3000/bookings" });
  };
  return (
    <>
      <div className="text-center text-xs text-gray-500">or Signup with</div>
      <div className="flex gap-4">
        <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src={fbLogo} alt="facebook" width={40} height={40} />
          <span>Facebook</span>
        </button>
        <button
          onClick={handleAuth}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src={googleLogo} alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
