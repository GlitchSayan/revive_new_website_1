'use client'
import React from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import a1Animation from '../../../public/a1.json'
import a2Animation from '../../../public/a2.json'
import a3Animation from '../../../public/a3.json'

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "List Your Waste",
            description: "Simply list the recyclable materials you have through our easy-to-use app. From paper to plastic, electronics to metals - we accept it all.",
            icon: "📝",
            color: "#6EE7B7",
            gradient: "from-green-50 to-emerald-100",
            animation: a1Animation
        },
        {
            number: "02", 
            title: "We Collect & Verify",
            description: "Our trained team arrives at your doorstep, collects your materials, and verifies quality on the spot. Get instant quotes based on market rates.",
            icon: "✅",
            color: "#34D399",
            gradient: "from-lime-50 to-lime-100",
            animation: a2Animation
        },
        {
            number: "03",
            title: "Earn & Impact",
            description: "Receive instant payment while contributing to a circular economy. Your waste becomes valuable raw material for sustainable manufacturing.",
            icon: "♻️",
            color: "#10B981",
            gradient: "from-teal-50 to-teal-100",
            animation: a3Animation
        }
    ]

    return (
        <div className='relative bg-gradient-to-b from-white via-[#f5faf6] to-white py-12 md:py-16 px-6 md:px-12 lg:px-24 overflow-hidden'>
            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#253612] mb-6 leading-tight font-sans'>
                        How It Works
                    </h2>
                    <p className='text-lg md:text-xl text-[#343434] max-w-3xl mx-auto leading-relaxed font-sans'>
                        Three simple steps to turn your waste into cash while making a positive environmental impact
                    </p>
                </div>

                {/* Steps Grid with Enhanced Design */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20'>
                    {steps.map((step, index) => (
                        <div key={index} className='relative group'>

                            {/* Card */}
                            <div className='relative bg-white rounded-3xl p-3 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-neutral-100'>

                                {/* Lottie Animation */}
                                <div className={`w-full h-60 bg-gradient-to-br ${step.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                                    {/* Lottie Animation */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Lottie
                                            animationData={step.animation}
                                            loop={true}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='space-y-4 p-8'>
                                    <h3 className='text-2xl md:text-3xl font-bold text-[#253612] mb-3 font-sans'>
                                        {step.title}
                                    </h3>
                                    <p className='text-base text-[#343434] leading-relaxed font-sans'>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section with Enhanced Design */}
                <div className='relative mt-20'>
                    <div className='bg-gradient-to-r from-[#386641] via-[#2d5234] to-[#253612] rounded-3xl p-10 md:p-16 text-white shadow-2xl overflow-hidden'>
                        {/* Background Pattern */}
                        <div className='absolute inset-0 opacity-10'>
                            <div className='absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20'></div>
                            <div className='absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20'></div>
                        </div>

                        <div className='relative z-10 text-center'>
                            <h3 className='text-3xl md:text-4xl font-bold mb-6 font-sans'>
                                Ready to Start Your Recycling Journey?
                            </h3>
                            <p className='text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto font-sans'>
                                Join thousands of people making a difference while earning money. Download our app and start recycling today!
                            </p>
                            
                            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                                <button className="group flex justify-center px-8 py-4 gap-3 items-center rounded-full bg-white text-[#253612] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg font-sans">
                                    <Image src="/logo_android.svg" alt="Android" width={20} height={20} />
                                    <span>Download for Android</span>
                                    <span className='transform group-hover:translate-x-1 transition-transform'>→</span>
                                </button>
                                <button className="group flex justify-center px-8 py-4 gap-3 items-center rounded-full bg-white text-[#253612] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg font-sans">
                                    <Image src="/logo_apple.svg" alt="iOS" width={20} height={20} />
                                    <span>Download for iOS</span>
                                    <span className='transform group-hover:translate-x-1 transition-transform'>→</span>
                                </button>
                            </div>

                            {/* Stats Section */}
                                                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12'>
                                <div>
                                    <div className='text-3xl md:text-4xl font-bold mb-2 font-sans'>10K+</div>
                                    <div className='text-sm opacity-90 font-sans'>Happy Users</div>
                                </div>
                                <div>
                                    <div className='text-3xl md:text-4xl font-bold mb-2 font-sans'>50K+</div>
                                    <div className='text-sm opacity-90 font-sans'>KG Recycled</div>
                                </div>
                                <div>
                                    <div className='text-3xl md:text-4xl font-bold mb-2 font-sans'>500+</div>
                                    <div className='text-sm opacity-90 font-sans'>Cities</div>
                                </div>
                                <div>
                                    <div className='text-3xl md:text-4xl font-bold mb-2 font-sans'>95%</div>
                                    <div className='text-sm opacity-90 font-sans'>Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks