import React from 'react';
import SIgnupHeader from './SignupHeader';
import SideHeader from './LeftSide';
import RightSection from './RightSection';
import PreviewBanner from './PreviewBanner';

function StartPage() {
    return (
        <div>
            <SIgnupHeader/>
            <div className='flex gap-2'>
            <SideHeader/>
            <RightSection/>
            </div>
            <PreviewBanner/>

           
        </div>
    );
}

export default StartPage;