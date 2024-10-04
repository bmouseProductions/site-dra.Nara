import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import faixaNara from '@/assets/images/faixa-nara.svg';
import faixaSentir from '@/assets/images/faixa-sentir.svg';

export default function Faixa() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            autoplay={{ delay: 0, disableOnInteraction: false }} 
            loop={true}
            speed={2000}
            modules={[Autoplay]}
            className='bg-black'
        >
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaNara}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaSentir}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaNara}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaSentir}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaNara}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaSentir}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaNara}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaSentir}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaNara}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
            <SwiperSlide className='w-fit'>
                <img 
                    src={faixaSentir}
                    alt={''}
                    className="w-auto h-10"
                />
            </SwiperSlide>
        </Swiper>
    );
}
