import React from 'react';
import image1 from '../../image/blog1.png'
import image2 from '../../image/blog2.png'
import image3 from '../../image/blog3.png'
import date from '../../image/dat.png'

const Blogs = () => {
    const data = [
        {
            id: 1,
            picture: image1,
            title: "Guide for personal property buying",
            description: "At firs you need to proper guid.Do you have any idea ? How to buy a personal property? So need to guid for personal property buying.",


        },
        {
            id: 2,
            picture: image2,
            title: "Guide for personal property Buying",
            description: "At firs you need to proper guid.Do you have any idea ? How to buy a personal property? So need to guid for personal property buying."
        },
        {
            id: 3,
            picture: image3,
            title: " Guide for personal property ",
            description: "At firs you need to proper guid.Do you have any idea ? How to buy a personal property? So need to guid for personal property buying."
        }
    ]

    return (
        <div className='w-10/12 mt-4 mx-auto'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Blogs</h1>
                <hr className='rounded-md lg:w-[248px] mx-auto' />
            </div>

            <div className=' gap-[46px]  justify-between mt-4 m-3 mx-auto  grid grid-cols-1 lg:grid-cols-3'>
                {
                    data.map(blog => <div
                        blog={blog}
                        id={blog.id}
                        className='shadow-2xl '
                    >

                        <div className="card p-3 lg:h-[595px]  bg-base-100 shadow-2xl ">
                            <figure><img className='w-[407px] h-[319px]' src={blog.picture} alt="Shoes" /></figure>
                            <div>
                                <p className='text-[16px]
                                text-rgba text-xl font-semibold  mt-3'>Real Estate, Analysis</p>
                                <div className='flex justify-between mt-4 font-semibold text-lg '>
                                    <div className='flex'>
                                        <img className='mr-[14px]' src={date} alt="" />  <p>9 Jun 2023</p>

                                    </div>
                                    <div>
                                        <p>By Admin</p>
                                    </div>
                                </div>

                            </div>
                            <div className="card mt-4">
                                <h2 className="card-title">{blog.title}</h2>

                                <p className='text-lg  lg:h-[120px]'>{blog.description}</p>


                                <div className=" justify-start text-rgba ">

                                    <p className='w-[202px]  py-[18px] px-[32px]  border-[1px]'>Contact Now</p>

                                </div>

                            </div>
                        </div>


                    </div>
                    )
                }
            </div>


        </div >
    );
};

export default Blogs;