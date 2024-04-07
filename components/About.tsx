import React from 'react'
import Image from 'next/image'
import learnlineImage from '../public/learnline.png';

const About = () => {
    return(
        <div className="flex relative flex-col my-2 mx-2 space-y-6"> 
            <div className="line-clamp-one bg-amber-100 rounded-md text-black max-w-13 py-2 px-2 align-middle max-h-12 leading-loose"> 
                Allowing students to take the best steps torwards their future
            </div>
            <div className="rounded-md"> 
             <Image
             src="/learnline.png"
             width={120}
             height={120}
             alt="Our Logo "
             />
            </div>
        </div>
    )
}

export default About
