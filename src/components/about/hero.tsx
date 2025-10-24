import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'

const AboutHero = () => {
    return (
        <div className='flex flex-col bg-[#f5faf6] m-3 md:m-8 rounded-2xl border border-neutral-200 items-center px-3 overflow-hidden min-h-[700px] md:min-h-[800px]'>
            <Navbar />
            <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto px-5 sm:px-2">
                <div className="flex flex-col items-center justify-center mt-10 md:mt-20 text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl text-[#253612] font-sans font-semibold mb-6">
                        About Us
                    </div>
                    <div className="text-base md:text-lg lg:text-xl font-sans font-light mt-6 lg:px-8 text-[#343434] leading-relaxed">
                        We collect scrap right from your doorstep and pay you instantly — no hassle, no stress! 
                        It's a safe, eco-friendly way to recycle your waste and earn money. Join us in creating 
                        a cleaner, greener future — because every scrap counts!
                    </div>
                </div>
            </div>
        
            
            <div className="flex justify-center items-center mt-8 mb-8 w-full">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto rounded-lg"
                >
                    <source src="/v1.MOV.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default AboutHero