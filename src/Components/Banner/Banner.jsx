import React from 'react';
import image from '../../assets/event-1.jpg'
import image2 from '../../assets/events-2.jpeg'
import image3 from '../../assets/events-3.jpeg'
import image4 from '../../assets/events-4.jpg'



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Banner = () => {



    return (

        <div className='mt-10 overflow-hidden '>

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
                    className="mySwiper w-full z-10"
                >
                    <SwiperSlide><img className='w-full h-[200px] rounded-lg md:h-[400px]' src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[200px] rounded-lg md:h-[400px]' src={image2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[200px] rounded-lg md:h-[400px]' src={image3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[200px] rounded-lg md:h-[400px]' src={image4} alt="" /></SwiperSlide>
                 
                   
                </Swiper>
            </div>







           
        </div>

    );
};

export default Banner;
