import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'

const CommunityHero = () => {
    return (
        <div className='flex flex-col bg-[#f5faf6] m-3 md:m-8 rounded-2xl border border-neutral-200 items-center px-3 overflow-hidden min-h-[700px] md:min-h-[800px]'>
            <Navbar />
            <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto px-5 sm:px-2">
                <div className="flex flex-col items-center justify-center mt-10 md:mt-20 text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl text-[#253612] font-sans font-semibold mb-6">
                        Join Our Community
                    </div>
                    <div className="text-base md:text-lg lg:text-xl font-sans font-light mt-6 lg:px-8 text-[#343434] leading-relaxed">
                        Be part of a growing community of eco-warriors who are making a difference, one scrap at a time. 
                        Together, we&apos;re building a sustainable future for generations to come.
                    </div>
                </div>
            </div>
            
            
            {/* Community Hero Image */}
            <div className="flex justify-center items-center mt-12 mb-8 w-full max-w-6xl">
                <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl relative overflow-hidden">
                    <Image 
                        src="/c1.jpeg" 
                        alt="Revive Community in Action" 
                        fill
                        className="object-cover rounded-2xl"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <div className="text-lg md:text-xl font-semibold mb-2">Our Growing Community</div>
                        <div className="text-sm opacity-90">Making a difference together</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CommunityHero
