import React from 'react';
import picture from '../../image/image 27.png'
import pic from '../../image/Line 115.png'
const AboutUs = () => {
    return (
        <div className=' mt-[35px] '>
            <div className='w-10/12  p-4 bg-gray  mx-auto  grid grid-cols-1 lg:grid-cols-2'>
                <div className=''>
                    <img className='w-full lg:h-full h-full' src={picture} alt="" />
                </div>
                <div className=' lg:my-[32px] lg:p-4'>

                    <div>
                        <p className='from-neutral-600  text-[36px]'>Who We Are?</p>
                        <p className='  mt-[20px] text-[18px] justify-center items-center text-left'>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
                    </div>

                    <div className=' w-[202px] mt-5 border-[1px]'>
                        <div>
                            <p className='py-[18px] px-[32px]'>Contact Now</p>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutUs;