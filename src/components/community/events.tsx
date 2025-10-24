import React from 'react'
import Image from 'next/image'

const CommunityEvents = () => {
    const pastEvents = [
        {
            title: "Prakriti 1",
            date: "September 15, 2024",
            time: "9:00 AM - 6:00 PM",
            location: "Community Center, Bangalore",
            description: "Our inaugural community recycling drive that brought together hundreds of eco-warriors for a day of environmental action and awareness.",
            category: "Registration Closed",
            participants: "300+ participants",
            image: "/c2.JPG"
        },
        {
            title: "Prakriti 2", 
            date: "November 20, 2024",
            time: "8:00 AM - 5:00 PM",
            location: "Green Park, Delhi",
            description: "Building on the success of Prakriti 1, our second event expanded the reach with more activities, workshops, and community engagement.",
            category: "Registration Closed",
            participants: "500+ participants",
            image: "/c3.JPG"
        },
        {
            title: "Upcoming: Prakriti 3",
            date: "March 2025",
            time: "TBA",
            location: "Coming Soon",
            description: "Get ready for our biggest community event yet! More details to be announced soon. ",
            category: "Upcoming Event",
            participants: "Registration opens soon",
            image: "/c12.png"
        }
    ]


    return (
        <div className='bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24'>
            <div className='max-w-7xl mx-auto'>
                {/* Upcoming Events Section */}
                <div className='mb-20'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-[#253612] mb-6'>
                            Our Community Events
                        </h2>
                        <p className='text-base md:text-lg text-[#343434] max-w-3xl mx-auto'>
                            Celebrating our successful community gatherings and looking forward to more
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {pastEvents.map((event, index) => (
                            <div key={index} className='bg-[#f5faf6] rounded-2xl p-3 border border-neutral-200 hover:shadow-lg transition-all duration-300'>
                                {/* Event Image */}
                                <div className='w-full h-64 rounded-xl mb-6 relative overflow-hidden'>
                                    <Image 
                                        src={event.image} 
                                        alt={event.title}
                                        fill
                                        className="object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                                </div>

                                {/* Event Details */}
                                <div className='mb-4'>
                                    <div className='bg-[#386641] text-white px-3 py-1 rounded-full text-xs inline-block mb-3'>
                                        {event.category}
                                    </div>
                                    <h3 className='text-xl font-semibold text-[#253612] mb-3'>{event.title}</h3>
                                    <p className='text-sm text-[#343434] mb-4 leading-relaxed'>{event.description}</p>
                                </div>

                                {/* Event Info */}
                                <div className='space-y-2 mb-6'>
                                    <div className='flex items-center gap-3 text-sm text-[#343434]'>
                                        <span className='text-base'>📅</span>
                                        <span>{event.date}</span>
                                    </div>
                                    <div className='flex items-center gap-3 text-sm text-[#343434]'>
                                        <span className='text-base'>⏰</span>
                                        <span>{event.time}</span>
                                    </div>
                                    <div className='flex items-center gap-3 text-sm text-[#343434]'>
                                        <span className='text-base'>📍</span>
                                        <span>{event.location}</span>
                                    </div>
                                    <div className='flex items-center gap-3 text-sm text-[#343434]'>
                                        <span className='text-base'>👥</span>
                                        <span>{event.participants}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommunityEvents
