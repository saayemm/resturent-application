import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
  return (
    <div>
        <SectionTitle heading={"TESTIMONIALS"} subHeading={"---What Our Clients Say---"}></SectionTitle>

        <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review=><SwiperSlide key={review._id}>
                <div className='max-w-[700px] mx-auto text-center mb-20 flex justify-center items-center flex-col gap-4'>
                     <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        />
                    <p>{review.details}</p>
                    <p className='text-2xl'>{review.name}</p>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default Testimonial