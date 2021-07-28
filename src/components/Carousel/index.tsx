import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { CarouselItem } from './CarouselItem';

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
    return(
        <Swiper
          spaceBetween={50}
          navigation={true}
          pagination={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <CarouselItem image='europe_home' continent='Europa' phrase='O continente mais antigo.'/>
            </SwiperSlide>
            <SwiperSlide>
                <CarouselItem image='oceania_home' continent='Oceania' phrase='O continente formado por ilhas.'/>
            </SwiperSlide>
            <SwiperSlide>
                <CarouselItem image='africa_home' continent='África' phrase='O continente da diversidade.'/>
            </SwiperSlide>
            <SwiperSlide>
                <CarouselItem image='asia_home' continent='Ásia' phrase='O continente mais populoso.'/>
            </SwiperSlide>
            <SwiperSlide>
                <CarouselItem image='america_sul_home' continent='América do Sul' phrase='O continente da matéria prima.'/>
            </SwiperSlide>
            <SwiperSlide>
                <CarouselItem image='america_norte_home' continent='América do Norte' phrase='O continente da potência.'/>
            </SwiperSlide>
        </Swiper>
    )
}