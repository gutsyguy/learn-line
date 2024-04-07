import React from "react"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex justify-center pt-2 top-0 h-min-screen text-center ">
          <div className="flex relative flex-row space-x-4 font-semibold text-lg">
            <div className="flex flex-row items-center space-x-4 text-black">
              <div className="bg-rose-700 text-white px-4 py-2 my-1 rounded-md">
              <Link href="/index">LearnLine</Link>
              </div>
              <div className="bg-rose-700 text-white px-4 py-2 my-1 rounded-md">
                <Link href="/">About</Link>
              </div>
              <div className="bg-rose-700 text-white px-4 py-2 my-1 rounded-md">
                <Link href="/profile">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
export default Navbar
