import React from "react"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
return(
<div className="flex flex-row items-center space-x-6 mt-2 mb-2 top-0 font-semibold text-lg py-3" > 
        <div className="text-gray-800 space-x-2 left-0"> 
         <Link href="/"> 
            <Image
            src="/profile.png"
            width={90}
            height={90}
            alt="Our Logo!"
    /></Link>
         <Link href="/">LearnLine</Link>
        </div>
        <div className="text-gray-800"> 
         <Link href="/">Home</Link>
        </div>
        <div className="text-gray-800"> 
         <Link href="/">About</Link>
        </div>
        <div className="text-gray-800"> 
         <Link href="/Welcome">Sign Up</Link>
        </div>
    </div>
 )
}