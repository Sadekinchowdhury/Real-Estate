import React from 'react';
import picture from '../../image/hapoy.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const ContactUs = () => {
    return (

        <div className="lg:[518px] mt-11 w-10/12 p-7 mx-auto bg-base-200">

            <div className='lg:flex block'>
                <div className='w-8/12 lg:p-10'>
                    <p className='text-3xl font-semibold'>
                        Get In Touch With Us To Connect
                    </p>
                    <p className='text-xl font-semibold mt-3'>Contact Us </p>
                    <form action="">
                        <div className='grid mt-2 grid-cols-1 lg:grid-cols-2 gap-4'>

                            <input type="text" placeholder="FullName" className="input input-bordered w-full   border-black" />

                            <input type="text" placeholder="Email" className="input input-bordered w-full   border-black" />

                            <PhoneInput
                                className='w-full h-full'
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true
                                }}
                            />
                            {/* <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue} /> */}
                            <input type="text" placeholder="Country" className="input input-bordered w-full   border-black" />




                            <input type="text" placeholder="Stages" className="input input-bordered w-full   border-black" />

                        </div>
                        <div>
                            <button className='lg:w-1/2 px-4 py-1.5 rounded-sm w-full mt-3 text-white font-semibold bg-rgba'>Submit</button>
                        </div>

                    </form>

                </div>


                <div className='justify-end'>
                    <img className='lg:w-[447px]  lg:h-[401px]' src={picture} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ContactUs;