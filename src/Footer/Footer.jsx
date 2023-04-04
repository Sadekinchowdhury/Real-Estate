import React from 'react';
import logo from '..//image/Vector 7.png'

const Footer = () => {
    return (
        <div className='bg-rgba mx-auto'>
            <div className='grid pt-5 lg:h-[380px] text-center  text-white grid-cols-1 lg:grid-cols-4'>
                <div>
                    <img src={logo} alt="" />
                    <p>INRE</p>
                </div>
                <div className=''>
                    <p className='text-2xl font-semibold'>Company</p>
                    <ul>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>Our team</p>
                        </li>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>Our team</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <p className='text-center text-2xl font-semibold'>Usefull Link</p>

                    <ul>
                        <li>
                            <p>
                                Blogs
                            </p>
                        </li>
                        <li>
                            <p>Faqs</p>
                        </li>
                    </ul>

                </div>
                <div>
                    <ul>
                        <li>
                            <p>
                                Email
                            </p>
                        </li>
                        <li>
                            <p>Phone Number</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Footer;