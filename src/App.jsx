import React,{ useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import headphone from './assets/hero/headphone.png'
import smartwatch from './assets/category/smartwatch.png'
import AOS from 'aos'
import "aos/dist/aos.css"

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 June to 27 June",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, tempore",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "18 June to 30 June",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, tempore",
  bgColor: "#2dcc6f",
};

function App() {

  const [ orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, []);


  return (
    <>
     <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />  
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />

     </div>
    </>
  )
}

export default App
