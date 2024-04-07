import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const UserProfile = () => {
    return(
        <div className="flex flex-col my-2 mx-2 space-x-4 space-y-4 items-center h-screen w-screen"> 
            <div className="flex flex-col-reverse line-clamp-one rounded-md text-black max-w-15 py-2 px-2 align-middle max-h-15 leading-loose font-semibold text-center divide-y divide-y-reverse divide-black bg-amber-200">
                <div className="font-bold">
                Insert Name Here 
                </div>
                Grade here
                <div className="place-items-start"> 
                Future career aspirations here
                </div>
                <div className="current course listings here">
                </div>
                <div className="flex relative justify-center"> 
                    <Image
                    src="/user.svg"
                    width={120}
                    height={120}
                    alt="Our Logo "
                    />
                </div>
            </div>  
        </div>
    )
}

export default UserProfile