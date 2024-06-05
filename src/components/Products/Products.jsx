import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard';
import Img1 from '../../assets/product/product1.png'
import Img2 from '../../assets/product/product2.png'
import Img3 from '../../assets/product/product3.png'
import Img4 from '../../assets/product/product4.png'
import Img5 from '../../assets/product/product5.png'
import Img6 from '../../assets/product/product6.png'
import Img7 from '../../assets/product/product7.png'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
];

const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Img6,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 7,
        img: Img7,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
];

function Products() {
  return (
    <div>
        <div className="container">
            <Heading title="Our Products" subtitle={"Explore Our Products"} />
            <ProductCard data={ProductsData} />
            <ProductCard data={ProductsData2} />
        </div>
    </div>
  )
}

export default Products   