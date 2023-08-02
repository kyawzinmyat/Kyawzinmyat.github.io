import React from 'react'

export default function Aboutme() {
    const mystyle = {
        background: 'radial-gradient(90% 90% at top center,transparent 92.5%, #fff 92.5%),linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary) 100%)',
    }
    return (
        <div className='box py-[2em] black-color' style={mystyle}>
            <div className='md:w-8/12 w-10/12 mx-auto text-center' >
                <h1 className='md:text-3xl text-lg font-extrabold secondary-color'>A Brief Introduction of Myself</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 my-[4em] md:gap-10 gap-y-10'>
                    
                    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 secondary-bg black-color rounded-[5px] md:col-span-2 shadow-lg'>
                        <h1 className='text-lg md:text-2xl font-md my-3 '>Professional</h1>
                        <hr></hr>
                        <div className='font-light text-sm md:text-md xl:px-[12em] lg:p[5em] p-[3em]'>
                            <p>My primary responsibilities include managing the timeline, maintaining communication with senior developers, and delivering the finished product on time while providing software implementations for customer demands via project manager and team leader. </p>
                            <p className='my-5'>I took involved in my seniors' projects in addition to my own by helping them with bug finding, brainstorming with them to come up with better solutions, and taking ownership of their assignments.</p>
                        </div>
                    </div>
                    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 secondary-bg black-color rounded-[5px] shadow-lg'>
                        <h1 className='text-center text-lg md:text-2xl font-md my-3'>Personal</h1>
                        <hr></hr>
                        <div className='xl:p-[4em] lg:p[5em] p-[3em] font-light text-sm md:text-md'>
                            <p>I'm currently 20 years old living in Kamayut Township, Yangon. Playing video games and learning about new technologies, such as networking, software, and computer architecture, are two of my passions.</p>
                            <p className='my-3'> I'm pursuing a Bachelor in Computer Science at an online university right now.</p>
                        </div>
                    </div>
                    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 secondary-bg black-color rounded-[5px] shadow-lg'>
                        <h1 className='text-lg md:text-2xl font-medium my-3'>Education</h1>
                        <hr></hr>
                        <div className='font-light xl:p-[4em] lg:p[5em] p-[3em] md:text-md text-sm'>
                            <p>In 2019, I earned my high school diploma.
                                At UCSY, I majored in computer science, but I no longer do so due to the political controversy.</p>
                            <p className='my-3'>During the COVID pandemic, I took computer science courses like CS50 and Object-Oriented Java programming to advance my skills.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
