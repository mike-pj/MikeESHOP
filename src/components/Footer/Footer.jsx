import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';


const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

function Footer() {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                <div className='py-8 px-4'>
                    <a 
                        href="#" 
                        className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl'
                    >
                        MikesESHOP
                    </a>
                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                        Lorem ipsum dolor Suscipit itaque molestiae sit, amet consectetur Suscipit itaque molestiae adipisicing elit. Suscipit 
                    </p>
                    <p className='text-gray-500 mt-2'>My God has made it possible </p>
                </div>

                <div className='col-span-2 grid gird-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index) => (
                                    <li key={index}>
                                        <a 
                                            href={data.link} 
                                            className='text-gray-600 dark:text-gray-400  hover:text-black hover:dark:text-white   duration-300' 
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index) => (
                                    <li key={index}>
                                        <a 
                                            href={data.link} 
                                            className='text-gray-600 dark:text-gray-400  hover:text-black hover:dark:text-white   duration-300' 
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p> West Bank, Los Angeles</p>
                            </div>

                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt />
                                <p>+83 987654321</p>
                            </div>

                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer