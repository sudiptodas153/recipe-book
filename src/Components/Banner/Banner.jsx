import React from 'react';




import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Banner = () => {



    return (

        <div className='container mx-auto px-3 my-10'>




            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                   
                    modules={[Autoplay, Pagination]}
                    className="mySwiper w-full  z-10"
                >
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                 
                   
                </Swiper>
            </div>







           
        </div>

    );
};

export default Banner;
