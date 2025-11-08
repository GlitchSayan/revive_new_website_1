import React from 'react'
import Image from 'next/image'

const CommunityStories = () => {
    return (
        <div className='bg-[#386641] py-16 md:py-24'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6'>
                        Prakriti Path
                    </h2>
                    <p className='text-base md:text-lg text-white opacity-90 max-w-3xl mx-auto'>
                        Moments from our community making a difference through sustainable recycling
                    </p>
                </div>

                {/* Success Stories - Picture Grid (3x4) */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 -mx-6 md:-mx-12 lg:-mx-32'>
                    {[
                        '/c4.jpeg', '/c5.jpeg', '/c6.jpeg', '/c7.jpeg',
                        '/c8.jpeg', '/c9.jpeg',
                    ].map((imageSrc, index) => (
                        <div key={index} className='relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer'>
                            <Image 
                                src={imageSrc}
                                alt={`Community moment ${index + 1}`}
                                width={500}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CommunityStories