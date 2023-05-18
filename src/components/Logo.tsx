'use client'

import Image from "next/image"
import logoimg from "../../public/images/logohouse.png"
import { useRouter } from "next/router"

const Logo = () => {
   // const router = useRouter();

  return (
    <Image 
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height={100}
        width={100}
        src={logoimg}
    />
  )
}

export default Logo