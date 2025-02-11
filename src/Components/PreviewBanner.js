import React from "react";
const PreviewBanner = () => {
    return (
        <div className="fixed h-auto lg:h-20 bottom-0 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 hidden lg:flex  justify-between items-center">
            <div>
                <p className="text-[20px] font-bold">Preview of Spotify</p>
                <p className="text-[18px]">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <button className="bg-white text-[18px] text-black font-semibold py-2 px-4 rounded-full w-auto">
                Sign up free
            </button>
        </div>
    );
};

export default PreviewBanner;
