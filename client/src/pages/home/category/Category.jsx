import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../../../assets/slide1.jpg'
import image2 from '../../../assets/slide2.jpg'
import image3 from '../../../assets/slide3.jpg'
import image4 from '../../../assets/slide4.jpg'
import image5 from '../../../assets/slide5.jpg'
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Category = () => {
  return (
    <div>
        <div>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11:00am to 10:00pm---"}>

            </SectionTitle>
        </div>
         <Swiper
        slidesPerView={5}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category