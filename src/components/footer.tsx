import React from "react";
import Image from "next/image";
const Footer = () => (
    <footer className="flex flex-col font-sans px-4 sm:px-8 xl:px-10 mx-auto mb-8">
        <div className="flex flex-col bg-[#386641] rounded-2xl md:rounded-[4rem] mt-5 pt-10 pb-12 md:pt-20 md:pb-24 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 px-4 sm:px-8 lg:px-16 xl:px-20">
                {/* Explore More */}
                <div className="flex flex-col gap-2 pb-6 md:pb-0 md:pr-6">
                    <span className="text-xl pb-1">Explore More</span>
                    <a href="#" className="text-base text-white/80 hover:underline py-1">Home</a>
                    <a href="#" className="text-base text-white/80 hover:underline py-1">Services</a>
                    <a href="#" className="text-base text-white/80 hover:underline py-1">Projects</a>
                </div>
                {/* About */}
                <div className="flex flex-col gap-2 pb-6 md:pb-0 md:pr-6">
                    <span className="text-xl pb-1">About</span>
                    <a href="#" className="text-base text-white/80 hover:underline py-1">Our Story</a>
                    <a href="#" className="text-base text-white/80 hover:underline py-1">Team</a>
                    <a href="#" className="text-base text-white/80 hover:underline py-1">Contact</a>
                </div>
                {/* Logo & Subscribe */}
                <div className="flex flex-col items-start gap-4 w-full md:w-auto pt-2 md:pt-0">
                    <span className="flex flex-col gap-4">
                        <Image src="/logo2.png" alt="Logo" width={150} height={150}  className="brightness-110"/>
                        <p className="text-white/70 text-sm">Join our newsletter to get the latest updates</p>
                    </span>
                    <form className="flex w-full md:w-auto gap-2 pt-2 md:pt-0">
                        <input
                            type="email"
                            placeholder="Enter Email address"
                            className="px-5 py-4 rounded-4xl bg-[#4d7554] focus:outline-none focus:ring-2 focus:ring-white/20 text-white w-full md:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-white text-[#386641] px-5 py-4 rounded-4xl hover:bg-white/90 hover:text-black"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mt-10 md:mt-16">
               <div className="bg-white/30 h-[0.025rem]"/>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-white/70 px-4 sm:px-8 lg:px-16 xl:px-20">
                <div className="flex gap-6 pb-4 md:pb-0 ">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
                <div className="mt-4 md:mt-0">
                    &copy; {new Date().getFullYear()} Revive Ecotech Ltd
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
