import React from "react";

import { Bell,Settings  } from "lucide-react";

const MainHeader = () => {
 
    return (
        <header className="bg-black text-white flex items-center justify-between px-4 py-2 left-0 top-0">
            {/* Left Section */}
          
                <div className="bg-white rounded-full hidden lg:flex">
                    <img
                        src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-black-17.png"
                        alt="Spotify Logo"
                        className="w-10 h-10 "
                    />
                </div>

                <p className="font-bold text-[18px] md:hidden">Good afternoon</p>

                <div className="flex gap-4 items-center">
                    <button className="p-3 rounded-full bg-customBgBlack hidden md:flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12L12 3l9.75 9v8.25H14.25v-6h-4.5v6H2.25V12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="relative hidden lg:flex justify-between">
                        <div className="space-x-2">
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200 w-6 h-6 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M10 2a8 8 0 016.32 12.906l4.387 4.386a1 1 0 01-1.414 1.415l-4.386-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="What do you want to play?"
                                className="bg-customBgBlack text-gray-200 text-[18px]   lg:w-[700px] pl-8 pr-8 py-1 h-12 rounded-full focus:outline-none"
                            />
                        </div>

                        <svg
                            data-encore-id="icon"
                            role="img"
                            aria-hidden="true"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2  w-6 h-6 invert-[100%]  "
                            viewBox="0 0 24 24"
                        >

                            <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
                            <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
                        </svg>



                    </div>
                </div>
         

            {/* Right Section */}
            <div className="flex items-center space-x-8">
                
              
                <button className="hidden lg:flex items-center space-x-2 text-sm ">
                    <img src="https://cdn-icons-png.flaticon.com/512/54/54993.png" alt="" className="h-5 invert-[100%]"></img>
                    <span className="text-[18px] font-semibold text-gray-300 hover:text-white">Install App</span>
                </button>

                <button className="hidden lg:flex">
                <Bell size={24} className="text-white" />
                </button>
                <button className="hidden lg:flex">
                    <img src="https://th.bing.com/th/id/R.a7d1d660dd10fce939389cc7aca65049?rik=5asdrj%2bZRcn5nw&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2ft%2fm%2fP%2fU%2fD%2fm%2fletter-s-purple-hi.png&ehk=aSH1Y6qBj2GbpzefodFUuN9WPTrXhWtlslmxFrcE02w%3d&risl=&pid=ImgRaw&r=0" alt="" className="h-12 w-auto"></img>
     
                </button>
  
                



                <Settings size={24} className="text-white lg:hidden" />
            </div>
        </header>
    );
};



export default MainHeader;