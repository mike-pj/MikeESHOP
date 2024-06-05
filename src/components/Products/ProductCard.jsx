import React from 'react'
import Button from '../Shared/Button'


const ProductCard = ({ data }) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-4 gap-5 place-items-center'>
            {
                data.map((data) => (
                    <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        className='group' 
                        key={data.id}    
                    >
                        <div className='relative'>
                            <img 
                                src={data.img} 
                                alt=""  
                                className='w-[260px] bg-gradient-to-br from-gray-400/90 to-gray-100 object-cover rounded-md'
                            />

                            <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                                <Button 
                                    text={"Add to cart"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>

                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>${data.price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductCard