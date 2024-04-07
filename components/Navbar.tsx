import React from "react"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex justify-center pt-2 top-0 w-full text-center bg-black ">
          <div className="flex relative flex-row space-x-4 font-semibold text-lg">
            
            <div className="flex flex-row items-center space-x-4">
              <div className="text-white">
              <Link href="/">LearnLine</Link>
              </div>
              <div className="text-white">
                <Link href="/">About</Link>
              </div>
              <div className="bg-rose-500 text-white px-4 py-2 my-1 rounded-md">
                <Link href="/">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
export default Navbar
