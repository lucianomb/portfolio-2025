// testimonial data
import {FaQuoteLeft} from "react-icons/fa";

const testimonialData = [
  {
    image: '/brendan.jpeg',
    name: 'Brendan M.',
    position: 'Customer',
    message:
      '⭐️⭐️⭐️⭐️⭐️ Luciano was great! He came in and quickly executed several WordPress development projects with awesome quality. His speed of execution and professionalism were much appreciated. He handled everything efficiently, and his expertise really showed in the pages he worked on. We couldn’t be happier with his work and highly recommend him to anyone in need of a skilled developer!',
  },
  {
    image: 'https://avatar.iran.liara.run/public/girl?username=ah',
    name: 'A. H.',
    position: 'Customer',
    message:
      'The best indeed! Highly reliable and efficient! Completed my website flawlessly and always delivered promptly with high precision. Luciano’s commitment and delivery are truly impressive. I am very happy with the results :) Certainly a pleasure to work with!',
  },
  {
    image: 'https://avatar.iran.liara.run/public/boy?username=va',
    name: 'VirtualAd',
    position: 'Customer',
    message:
      'Luciano helped us fix an urgent malware issue with our Wordpress website. There was a lot of spam/malware installed by a hacker, where people were getting redirected to a spammy link. He fixed it quickly and prioritized the project + gave us great recommendation on prevention of things like this moving forward. Thanks Luciano!',
  },
  {
    image: '/martin.jpeg',
    name: 'Martin K.',
    position: 'Customer',
    message:
      'Luciano did a great job, were in a jam because our previous partner had bailed on us, but Luciano came in and saved the day. He was extremely responsive with our client, and got the job done with time to spare!',
  },
  {
    image: 'https://avatar.iran.liara.run/public/boy?username=tb',
    name: 'Tim B.',
    position: 'Customer',
    message:
      'Luciano has been a terrific partner for my company. It\'s great to work with people you can trust.',
  },
];

import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

const TestimonialSlider = () => {
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
                {person.position}
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
            <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default TestimonialSlider;

