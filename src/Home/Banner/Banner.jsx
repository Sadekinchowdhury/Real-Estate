import React from 'react';
import picture from '../../image/picturs.png'
const Banner = () => {
    return (
        <div className='bg-rgba lg:flex w-10/12 block  m-3  mx-auto mt-[70px] h-[480px]'>
            <div className='items-center text-center justify-center'>
                {/* text */}

                <p className='text-white  lg:mt-20 lg:ml-16 text-[40px] '>Making your <strong className='text-yellow-400  '>real  estate</strong>  purchase <br />  journey faster and <br />   transparent</p>
            </div>
            <div>
                {/* picture */}
                <img className='lg:w-[1024px] w-full h-full lg:h-[480px]' src={picture} alt="" />

            </div>
        </div>
    );
};

export default Banner;