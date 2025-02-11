import React from "react";

const SideHeader = () => {
    return (
        <aside className="w-auto bg-customleftblack mt-4 ml-2 rounded-lg text-white p-4 hidden md:flex flex-col justify-between overflow-hidden">
            {/* Top Section */}
            <div className="flex flex-col space-y-4 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center  h-28 px-4">
                    <h2 className="text-lg font-bold flex items-center space-x-2">
                        {/* Library Icon */}
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 3h2v18H4V3zm5 0h2v18H9V3zm5 0h2v18h-2V3zm5 0h2v18h-2V3z" />
                        </svg>
                        <span>Your Library</span>
                    </h2>

                    {/* Plus Button */}
                    <button className="p-1 hover:bg-gray-800 rounded">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z" />
                        </svg>
                    </button>
                </div>

                {/* Playlist & Podcast Section */}
                <div className="space-y-4  ">
                    <div className="bg-customBgBlack p-4 rounded-lg h-40 space-y-2">
                        <h3 className="font-bold text-[19px]">Create your first playlist</h3>
                        <p className="text-sm text-white font-semibold">It's easy, we'll help you</p>
                        <button className="mt-2 bg-white text-black text-sm font-bold py-2 px-4 rounded-full">
                            Create playlist
                        </button>
                    </div>

                    <div className="bg-customBgBlack h-40 p-4 rounded-lg space-y-2">
                        <h3 className="font-bold text-[19px]">Let's find some podcasts to follow</h3>
                        <p className="text-sm text-white font-semibold">We'll keep you updated on new episodes</p>
                        <button className="mt-2 bg-white text-black text-sm font-bold py-2 px-4 rounded-full">
                            Browse podcasts
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 text-xs text-gray-400 space-y-4 h-72 flex flex-col ">
                {/* Footer Links */}
                <div className="flex flex-wrap gap-4 text-[14px] ">
                    <a href="#" className="hover:underline">Legal</a>
                    <a href="#" className="hover:underline">Safety & Privacy</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline ">Cookies</a>
                    <a href="#" className="hover:underline">About Ads</a>
                    <a href="#" className="hover:underline">Accessibility</a>
                </div>
                <a href="#" className="hover:underline text-white text-[16px]">Cookies</a>
                {/* Language Selector */}
                <button className="mt-4 flex items-center text-white  space-x-2 border border-gray-400 hover:border-white px-3 py-1 rounded-full w-auto lg:w-28">
                    {/* Globe Icon */}
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 2c2.21 0 4 4.477 4 10s-1.79 10-4 10-4-4.477-4-10 1.79-10 4-10zm-8 10h16m-8-8v16" />
                    </svg>

                    <span className="text-[16px] font-semibold">English</span>
                </button>
            </div>
        </aside>
    );
};

export default SideHeader;
