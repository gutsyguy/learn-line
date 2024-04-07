import React from 'react'
import Image from 'next/image'
import books from '../public/books.jpeg';

const Info = () => {
    return(
        <div className="flex flex-col my-2 mx-2 items-center h-screen w-screen max-w-md">    
            <div className="line-clamp-one bg-amber-100 rounded-md text-black max-w-15 py-2 px-2 align-middle max-h-15 leading-loose font-semibold text-center">
                LearnLine is the best way to take control of your future by finding the right path for you!
            </div>
            {/* <div className="">
            <Image
            src="/books.png"
            width={120}
            height={120}
            alt="Books"
            />
            </div> */}
        </div>
    )
}

export default Info