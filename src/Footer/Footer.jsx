import React from 'react';
import logo from '..//image/10.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='bg-rgba mx-auto'>
            <div className='grid pt-5  lg:h-[300px] text-center  text-white grid-cols-2 lg:grid-cols-4'>
                <div className=''>
                    <img className='item-center justify-center content-center lg:ml-5' src={logo} alt="" />

                </div>
                <div className=''>
                    <p className='text-2xl font-semibold'>Company</p>
                    <ul className=''>
                        <li className='mt-3'>
                            <p>Home</p>
                        </li>
                        <li className='mt-3'>
                            <p>Our team</p>
                        </li>
                        <li className='mt-3'>
                            <p>Home</p>
                        </li>
                        <li className='mt-3'>
                            <p>Our team</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <p className='text-center text-2xl font-semibold'>Usefull Link</p>

                    <ul>
                        <li className='mt-3'>
                            <p>
                                Blogs
                            </p>
                        </li>
                        <li className='mt-3'>
                            <p>Faqs</p>
                        </li>
                    </ul>

                </div>
                <div>
                    <ul>
                        <li className='mt-3'>
                            <p>
                                Email
                            </p>
                        </li>
                        <li className='mt-3'>
                            <p>Phone Number</p>
                        </li>
                    </ul>

                </div>
            </div>



            <div className='lg:flex p-3 w-10/12 m-3 gap-5 mx-auto text-white  block'>
                <div className='w-6/12'>
                    <p>Copyright 2023. Designed by INRE Global</p>
                </div>
                <div className='w-6/12 text-center gap-4 grid grid-cols-2 lg:grid-cols-4 '>
                    <div>
                        <span className='flex items-center justify-center '> <FaLinkedin className='mr-2'></FaLinkedin>Linkedin</span>
                    </div>
                    <div>
                        <span className='flex items-center justify-center '> <FaFacebook className='mr-2'></FaFacebook> Facebook</span>
                    </div>

                    <div>
                        <span className='flex items-center justify-center '> <FaTwitter className='mr-2'></FaTwitter>  Facebook</span>
                    </div>
                    <div>
                        <span className='flex items-center justify-center '> <FaInstagram className='mr-2'></FaInstagram> Instagram </span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;