import React from 'react';
import image1 from '../../image/offer1.png'
import image2 from '../../image/offer2.png'
import image3 from '../../image/offer3.png'
const MyOffer = () => {

    const data = [
        {
            id: 1,
            picture: image1,
            title: "Background Verification",
            description: "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
            money: "INR 3000/Project"

        },
        {
            id: 2,
            picture: image2,
            title: "Virtual site visit",
            description: "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."
        },
        {
            id: 3,
            picture: image3,
            title: "Title diligence",
            description: "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."
        }
    ]


    return (
        <div className='w-10/12 mt-[35px] lg:h-[897px] mx-auto'>
            <div>
                <p className='text-center text-[32px] font-bold'>Our offering</p>
                <p className=' text-center mt-[20px] text-[16px] font-normal '>This whole purchase journey can be divided into three stages. For more details, <strong className='text-rgba font-bold'>Click Here</strong></p>

            </div>

            <div className=' my-3'>
                <div className='text-center lg:h-[100px] items-center justify-center  rounded-xl p-5 gap-[29px] mx-auto  grid grid-cols-1 lg:grid-cols-3 '>
                    <div className='bg-slate-200  flex p-5'>
                        <span className='mr-[20px] bg-white rounded-full w-6 h-6'>1</span>  <p>Pre-Booking</p>
                    </div>
                    <div className='bg-gray flex p-5'>
                        <span className='mr-[20px] bg-white rounded-full w-6 h-6'>2</span>   <p>Post-Booking & Pre-Registration</p>
                    </div>
                    <div className='bg-slate-200 flex p-5'>
                        <span className='mr-[20px] bg-white rounded-full w-6 h-6'>3</span> <p>Post-Registration </p>
                    </div>
                </div>
            </div>
            <div>
                {/* card */}

            </div>

            <div className='gap-[46px] mt-4 m-3 mx-auto  grid grid-cols-1 lg:grid-cols-3'>
                {
                    data.map(offer => <div
                        offer={offer}
                        id={offer.id}
                        className='shadow-2xl '
                    >
                        <div className="card p-3  h-[631px] bg-base-100 shadow-2xl ">
                            <figure><img className='w-[407px] h-[319px]' src={offer.picture} alt="Shoes" /></figure>
                            <div className="card mt-4">
                                <h2 className="card-title">{offer.title}</h2>
                                <p className='mt-[20px] text-[18px]'>{offer.description}</p>

                                <div className=" justify-start text-rgba w-[202px]  py-[18px] px-[32px]  border-[1px] mt-5">

                                    <p className=''>Contact Now</p>

                                </div>

                            </div>
                        </div>


                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOffer;