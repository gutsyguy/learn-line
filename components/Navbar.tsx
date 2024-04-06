import React from "react"
import Link from "next/link"

const Navbar = () => {
return(
<div className="flex fixed flex-row space-x-4 mt-2 mb-2 top-0 font-semibold text-lg py-3 justify-center h-screen" > 
     <div className="text-white absolute left-0"> 
         <Link href="/">LearnLine</Link>
    </div>
    <div className="absolute right-0 ">     
        <div className="text-white"> 
            <Link href="/">About</Link>
        </div>
        <div className=" bg-rose-500 text-white px-4 py-2 my-1 rounded-md"> 
            <Link href="/">Sign Up</Link>
        </div>
    </div>
</div>
 )
}

export default Navbar