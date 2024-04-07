import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const UserWidget = () => {
    return(
        <div className="flex flex-col my-2 mx-2 space-x-4 space-y-4 items-center h-screen w-screen">
            <div className="line-clamp-one bg-gradient-to-r from-amber-200 to-amber-700 rounded-md text-black max-w-15 py-2 px-2 align-middle max-h-15 leading-loose font-semibold text-center font-sans">
                <div className="flex relative justify-center"> 
                <Image
                src="/info.svg"
                width={120}
                height={120}
                alt="Info Symbol"
                />
                </div>
                <div className="font-bold">
                 Congratulations!
                </div>
                 You've completed our form and now are ready for the rest of your life
            </div>
             <button className="flex basis-3 static bg-amber-200 text-black px-2 py-0.5 my-1 rounded-full items-center text-lg">  
                <Link href="/">Ready to see your Profile?</Link>
             </button>
        </div>
    )
}

export default UserWidget