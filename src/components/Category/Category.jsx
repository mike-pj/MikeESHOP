import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Button from '../Shared/Button'

function Category() {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-3'>Earphone</p>
                            <Button 
                            text = "Browse"
                            bgColor = {"bg-primary"}
                            textColor ={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt="earphones" className='w-[195px] absolute bottom-0 -right-4' />
                </div>

                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>
                                Enjoy
                            </p>
                            <p className='text-2xl font-semibold mb-[2px]'>
                                With
                            </p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>
                                Gadget
                            </p>
                            <Button 
                            text = "Browse"
                            bgColor = {"bg-white"}
                            textColor ={"text-brandYellow"}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt="wrist watch" className='w-[135px] absolute top-[20px] right-12 lg:right-6' />
                </div>

                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>
                                Enjoy
                            </p>
                            <p className='text-2xl font-semibold mb-[2px]'>
                                With
                            </p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>
                                Laptop
                            </p>
                            <Button 
                            text = "Browse"
                            bgColor = {"bg-white"}
                            textColor ={"text-primary"}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[370px] absolute top-[80px] right-5 lg:-right-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category