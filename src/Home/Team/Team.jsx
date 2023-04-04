import React from 'react';
import image1 from '../../image/team1.png'
import image2 from '../../image/team2.png'
import image3 from '../../image/team3.png'
const Team = () => {
    const data = [
        {
            id: 1,
            picture: image1,
            title: "Brajesh Pathak",
            description: "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...",
            money: "INR 3000/Project"

        },
        {
            id: 2,
            picture: image2,
            title: "Deepak Shukla",
            description: "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications."
        },
        {
            id: 3,
            picture: image3,
            title: "Alok Kumar Singh",
            description: "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management."
        }
    ]

    return (
        <div className='w-10/12 mt-4 mx-auto'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Our Team</h1>
                <hr className='rounded-md lg:w-[248px] mx-auto' />
            </div>

            <div className=' gap-[46px]  mt-4 m-3 mx-auto  grid grid-cols-1 lg:grid-cols-3'>
                {
                    data.map(team => <div
                        team={team}
                        id={team.id}
                        className='shadow-2xl '
                    >

                        <div className="card p-3 lg:h-[595px]  bg-base-100 shadow-2xl ">
                            <figure><img className='w-[407px] h-[319px]' src={team.picture} alt="Shoes" /></figure>
                            <div className="card mt-4">
                                <h2 className="card-title">{team.title}</h2>

                                <p className='text-lg mb-[17px] lg:h-[120px]'>{team.description.length > 200 ? team.description.slice(0, 200) + '...see more' : description}</p>

                                {/* <p className='mt-[20px] text-[18px]'>{team.description}</p> */}

                                <div className="card-actions justify-end mt-6">
                                    <button className="text-rgba text-base">View More</button>
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

export default Team;