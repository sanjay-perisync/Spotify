import React from 'react';
import MainHeader from './MainHeader';
import SideHeader from './LeftSide';
import RightSection from './RightSection';


function Home() {
    return (
        <div className='bg-black'>
           <MainHeader/>
           <div className='flex gap-2'>
            <SideHeader/>
            <RightSection/>
            </div>
           
        </div>
    );
}

export default Home;