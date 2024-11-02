'use client';

import Image from 'next/image';

export default function HeroImageLoader() {
    return (
        <Image
            src="https://res.cloudinary.com/dlyjejbuz/image/upload/v1730554898/qra4hgf35mh0zir6ixfp.png"
            alt="Hero image"
            fill
            sizes='(max-width: 328px) (max-hight: 490px), (max-width: 395px) (max-hight: 592px)'
            priority
        />
    );
}
