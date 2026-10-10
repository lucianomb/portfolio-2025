// testimonial data
import {FaQuoteLeft} from "react-icons/fa";

const testimonialData = [
  {
    image: '/brendan.jpeg',
    name: 'Brendan M.',
  },
  {
    image: 'https://avatar.iran.liara.run/public/girl?username=ah',
    name: 'A. H.',
  },
  {
    image: 'https://avatar.iran.liara.run/public/boy?username=va',
    name: 'VirtualAd',
  },
  {
    image: '/martin.jpeg',
    name: 'Martin K.',
  },
  {
    image: 'https://avatar.iran.liara.run/public/boy?username=tb',
    name: 'Tim B.',
  },
];

import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {useTranslation} from "../locales";

const TestimonialSlider = () => {
  const t = useTranslation();
  return <Swiper
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='h-[600px] md:h-[400px]'
  >
    {testimonialData.map((person, index) => {
      return <SwiperSlide key={index}>
        <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
          {/*avatar, name, position*/}
          <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
            <div className='flex flex-col justify-center text-center'>
              {/*avatar*/}
              <div className='mb-2 mx-auto'>
                <Image src={person.image} width={100} height={100} alt='avatar' className='rounded-full w-[100px] h-[100px] object-cover' />
              </div>
              {/*name*/}
              <div className='text-lg'>{person.name}</div>
              {/*position*/}
              <div className='text-[12px] uppercase font-extralight tracking-widest'>
                {t.testimonials.position}
              </div>
            </div>
          </div>
          {/*quote & message*/}
          <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
            {/*quote icon*/}
            <div className='mb-4'>
              <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
            </div>
            {/*message*/}
            <div className='xl:text-lg text-center md:text-left'>{t.testimonials.messages[index]}</div>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default TestimonialSlider;

