'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CardModal from "./CardModal";

export default function NavIcons() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const router = useRouter();


  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login")
    }

    setIsProfileOpen((prev) => !prev)
  }

  return (
    <div className="flex gap-6 relative">
      <Image
        alt=""
        src={"/profile.png"}
        width={20}
        height={20}
        onClick={handleProfile}
        className="cursor-pointer"
      />
      {
        isProfileOpen && (
          <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-white border-gray-50 shadow-lg z-20">
            <Link href={"/login"}>Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        )
      }
      <Image alt="" src={"/notification.png"} width={20} height={20} />
      <CardModal />
    </div>
  )
}
