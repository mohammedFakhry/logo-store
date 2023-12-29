import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


function Slider() {
    const [apiData, setApiData] = useState();

    // Function to collect data
    const getApiData = async () => {
    const response = await fetch(
        "https://fakestoreapi.com/products?limit=8"
    ).then((response) => response.json());

    setApiData(response);
    };

    useEffect(() => {
    getApiData();
    }, []);

return (
    <>
        <Swiper
            direction={"vertical"}
            // Lazy={true}
            pagination={{
            clickable: true,
        }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {apiData &&
            apiData.map((data) => (
                <SwiperSlide key={data.id}><img src={data.image} alt="" loading="lazy" className='slider-img' /></SwiperSlide>
            ))}
        </Swiper>
    </>
);
}

export default Slider;