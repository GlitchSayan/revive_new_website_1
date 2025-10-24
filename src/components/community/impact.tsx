import React from 'react'

const CommunityImpact = () => {
    const impactData = [
        {
            title: "Environmental Impact",
            stats: [
                { number: "2,500", label: "Tons CO₂ Reduced", icon: "🌱" },
                { number: "75,000", label: "Trees Saved", icon: "🌳" },
                { number: "1M+", label: "Liters Water Saved", icon: "💧" }
            ],
            color: "from-green-400 to-green-600"
        },
        {
            title: "Community Growth",
            stats: [
                { number: "10K+", label: "Active Members", icon: "👥" },
                { number: "500+", label: "Cities", icon: "🏙️" },
                { number: "95%", label: "Satisfaction Rate", icon: "⭐" }
            ],
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "Economic Impact",
            stats: [
                { number: "₹5M+", label: "Earned by Users", icon: "💰" },
                { number: "₹2K", label: "Average Monthly Earning", icon: "📈" },
                { number: "24hrs", label: "Average Payment Time", icon: "⚡" }
            ],
            color: "from-purple-400 to-purple-600"
        }
    ]

    return (
        <div className='bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-[#253612] mb-6'>
                        Our Community Impact
                    </h2>
                    <p className='text-base md:text-lg text-[#343434] max-w-3xl mx-auto'>
                        Together, we&apos;re creating measurable change in our environment, economy, and communities
                    </p>
                </div>

                {/* Impact Cards */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
                    {impactData.map((category, index) => (
                        <div key={index} className='bg-[#f5faf6] rounded-2xl p-8 border border-neutral-200'>
                            <h3 className='text-xl md:text-2xl font-semibold text-[#253612] mb-8 text-center'>
                                {category.title}
                            </h3>
                            <div className='space-y-6'>
                                {category.stats.map((stat, statIndex) => (
                                    <div key={statIndex} className='flex items-center gap-4'>
                                        <div className='text-3xl'>{stat.icon}</div>
                                        <div className='flex-1'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#253612]'>
                                                {stat.number}
                                            </div>
                                            <div className='text-sm text-[#343434]'>
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default CommunityImpact
