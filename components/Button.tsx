import React from 'react'
import Link from 'next/link'

const Button = () => {
return(
   <button className="bg-amber-100 text-black px-4 py-2 my-1 rounded-full">  
      <Link href="/"> Sign Up!</Link>
   </button>    
 )
}

export default Button