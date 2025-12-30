import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const card = [
    {
        name: "food",
        img: "/home/destination/food.webp"
    },
    {
        name: "outdoors",
        img: "/home/destination/outdoor.webp"
    },
    {
        name: "culture",
        img: "/home/destination/culture.webp"
    },
    {
        name: "water",
        img: "/home/destination/water.jpg"
    }
]

export default function DestinationSection() {
    return (
        <>
            <section className='destination_section padding_bottom padding_top container mt-8 md-pb  '>
                <div className="destination_title section_title ">
                    <h2 className='mb-0'>
                        Trending Destinations
                    </h2>
                    <h5 >
                        Whatever you're into, we’ve got it
                    </h5>
                </div>
                {/* ************** */}
                <div className="container_fluid">
                    {/* ******************** */}
                    <div className=' d-none d-lg-block'>
                        <div className="row ">
                            {
                                card?.map((item, k) => {
                                    return (



                                        <div className="col-12 col-lg-3 " key={k}>
                                            <div className="destination_box">
                                                <div className="destination_img  ">
                                                    <img src={item?.img} className='rounded-3xl' alt="" />
                                                    <div className="destination_name">
                                                        <h5>
                                                            {item?.name}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    )





                                })
                            }


                        </div>
                    </div>
                    {/* ************************************************ on croll the page scroller  */}
                    <div className='d-block d-lg-none'>
                        <div className="row relative">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={0}
                                pagination={{ clickable: true }}
                                navigation={{
                                    prevEl: "#destination_prev",
                                    nextEl: "#destination_next",
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}


                                breakpoints={{
                                    320: {
                                        slidesPerView: 1.5

                                    },
                                    375: {
                                        slidesPerView: 1.5

                                    },
                                    425: {
                                        slidesPerView: 1.5,


                                    },

                                    768: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 20,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                        spaceBetween: 24,
                                    },
                                }}
                                modules={[Pagination, Autoplay, Navigation]}
                                className="mySwiper relative"
                            >
                                {
                                    card?.map((item, i) => {

                                        return (

                                            <>
                                                <SwiperSlide key={i}>
                                                    <div className="destination_box pb-10">
                                                        <div className="destination_img  ">
                                                            <img src={item?.img} className='rounded-3xl' alt="" />
                                                            <div className="destination_name">
                                                                <h5>
                                                                    {item?.name}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </SwiperSlide>
                                                {/* ********************** */}
                                            </>
                                        )

                                    })
                                }
                            </Swiper>
                            <div className="button_swiper absolute ">
                                <div className="buttons_icon relative">
                                    <button id='destination_prev' className='absolute'>
                                        <MdOutlineKeyboardArrowLeft size={30} />
                                    </button>


                                    <button id='destination_next' className='absolute'>
                                        <MdOutlineKeyboardArrowRight size={30} />
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
