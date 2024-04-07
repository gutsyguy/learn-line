import React from 'react'
import Image from 'next/image'
import learnlineImage from '../public/learnline.png';

const About = () => {
    return(
        <div className="flex fixed flex-col my-2 mx-2 space-x-6 items-center h-screen w-screen">
            <div className="rounded-md"> 
             <Image
             src="/learnline.png"
             width={120}
             height={120}
             alt="Our Logo "
             />
            </div> 
            <div className="line-clamp-one bg-amber-100 rounded-md text-black max-w-15 py-2 px-2 align-middle max-h-15 leading-loose font-semibold text-center">
                <div className="font-bold">
                    Welcome to LearnLine
                </div>
                Allowing students to take the best steps torwards their future
            </div>
        </div>
    )
}

export default About
