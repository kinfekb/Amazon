import React from 'react';
import './Home.css';
import Product from './Product';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Bluetooth, BlurCircularSharp } from '@material-ui/icons';

function Home() {
  return (
     

    <div className="home">
      <div className="home__container">
      <Carousel 
            renderIndicator={false}
            showThumbs={false}
            className="home__image"
            autoPlay
            interval={2000}
            infiniteLoop
            sizeArrow ={500}
            // showArrows={false}
            >
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-YWViNmFlODkt-w1500._CB668786370_.jpg"
          alt=""
        />
         <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzkzZDYxNTkt/NzkzZDYxNTkt-OWQwMzQwNDUt-w3000._CB663569411_.jpg"
          alt=""
        />
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/OTC/Homepage/OTC_GW-desktop_Phase-1_2x-3000x1200._CB669937678_.jpg"
          alt=""
        />
        
        </Carousel>
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id=""
            title="XUER Ergonomics Office Chair Mesh Computer Desk Chair,Adjustable Headrests Chair Backrest and Armrest's Mesh Chair (Black)"
            price={229.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71UUH5GgUUL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />

          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="8903851"
            title="JBL Quantum 800 - Wireless Over-Ear Performance Gaming Headset with Active Noise Cancelling and Bluetooth 5.0 - Black"
            price={199.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/81jfo0rafsL._AC_SX679_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row">
          <Product
            id=""
            title="2iDPRT Thermal Label Printer - SP410 Thermal Shipping Label Printer, 4x6 Label Printer, Commercial Direct Thermal Label Maker"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/710SCsUMuGS._AC_UY218_.jpg"
          />
          <Product
            id=""
            title="WiFi Extender - 1200Mbps Wireless Signal Repeater Booster up to 3000 sq.ft - 2.4 & 5GHz Dual Band 4 Antennas 360° Full Coverage - Internet Signal Amplifier"
            price={59.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51tex9MeVZL._AC_UY218_.jpg"
          />
          <Product
            id=""
            title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD,"
            price={623.89}
            rating={5}
            image="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg"
          />
          <Product
            id=""
            title="Amazon Basics Single Monitor Stand - Lift Engine Arm Mount, Aluminum - Black"
            price={111.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81agilODNeL._AC_SX569_.jpg"/>
            </div >

           






             </div>
              </div>



    
  
  );
}

export default Home;
