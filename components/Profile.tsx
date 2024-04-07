import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return(
        <div className="flex flex-col my-2 mx-2 space-x-4 space-y-4 items-center h-screen w-screen">
            <div className="rounded-md"> 
             <Image
             src="/learnline.png"
             width={120}
             height={120}
             alt="Our Logo "
             />
            </div> 
            <div className="line-clamp-one bg-amber-200 rounded-md text-black max-w-15 py-2 px-2 align-middle max-h-15 leading-loose font-semibold text-center">
                <div className="font-bold">
                Welcome to LearnLine
                </div>
                Allowing students to take the best steps torwards their future
            </div>
             <button className="flex basis-0.5 static bg-amber-200 text-black px-2 py-0.5 my-1 rounded-full items-center text-lg">  
                <Link href="/"> Sign Up!</Link>
             </button>

        </div>
    )
}

export default About