import React from 'react'
import Link from 'next/link'

const Button = () => {
return(
   <button className=" bg-[#FFFDCA] text-black px-4 py-2 my-1 rounded-full items-center h-screen w-screen max-w-10 max-h-10">  
      <Link href="/"> Sign Up!</Link>
   </button>    
 )
}

export default Button