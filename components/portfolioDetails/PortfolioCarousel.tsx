'use client';

import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

export default function PortfolioCarousel({ slides }: { slides: string[] }) {
    // Ensure that the slides array is not empty
    if (!slides || slides.length === 0) {
        return null;
    }
    return (
        <div className="max-w-[450px] lg:max-w-[900px] relative overflow-visible">
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                speed={500}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={15}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                style={
                    {
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        '--swiper-pagination-bullet-inactive-color': 'red',
                        height: '500px',
                    } as React.CSSProperties
                }
            >
                {slides.map((url, inx) => (
                    <SwiperSlide key={inx} className="!flex justify-center items-center">
                        <div className="overflow-hidden relative w-[328px] h-[328px] flex justify-center items-center rounded-lg">
                            <Image
                                src={url}
                                sizes="(min-width: 1024px) 33.3vw, 100vw"
                                fill
                                alt={`Image ${inx + 1}`}
                                quality={100}
                                className="object-cover"
                                priority={inx === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
