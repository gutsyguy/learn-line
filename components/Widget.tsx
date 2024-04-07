import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Widget = () => {
    return(
        <div className="flex flex-col my-2 mx-2 space-x-4 space-y-4 items-center h-screen w-screen">
            <div className="line-clamp-one bg-gradient-to-r from-amber-200 to-rose-700 rounded-md text-black max-w-15 py-2 px-2 align-middle max-h-15 leading-loose font-semibold text-center">
                <div className="rounded-md"> 
                <Image
                src="/danger.svg"
                width={120}
                height={120}
                alt="Our Logo "
                />
                </div> 
                <div className="font-semibold">
                It looks like you barely begun!
                </div>
                Begin to sculpt your ideal future today by taking a simple form now!
            </div>
             <button className="flex basis-0.5 static bg-rose-500 text-black px-2 py-0.5 my-1 rounded-full items-center text-lg">  
                <Link href="/">Get Started Now</Link>
             </button>
        </div>
    )
}

export default Widget