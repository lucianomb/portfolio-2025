import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from "next/image";
import {BsArrowRight} from "react-icons/bs";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Luc\'s Vault',
          path: '/lucsvault.jpg',
          url: 'https://vault.lucianomb.it/'
        },
        {
          title: 'BRESH LANDING PAGE',
          path: '/bresh.jpg',
          url: 'https://lucianomb.it/bresh/'
        },
        {
          title: 'Books at a Glance',
          path: '/baag.jpg',
          url: 'https://www.booksataglance.com/'
        },
        {
          title: 'Witte Museum',
          path: '/witte.jpg',
          url: 'https://www.wittemuseum.org/'
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //       url: ''
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //       url: ''
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //       url: ''
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //       url: ''
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  return <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[480px] sm:h-[480px]'
  >
    {workSlides.slides.map((slide, index) => {
      return <SwiperSlide key={index}>
       <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
         {slide.images.map((image, index) => {
           return <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
             <div className='flex items-center justify-center relative overflow-hidden group h-[200px]'>
               {/* image */}
               <Image src={image.path} alt='screenshot' width={500} height={300} className='object-cover h-full' />
               {/* overlay */}
               <div className="absolute inset bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 w-full h-full"></div>
               {/* title */}
               <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                 <Link href={image.url} target='_blank' className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                   {/*title part 1*/}
                   <div className='delay-100'>LIVE</div>
                   {/*title part 2*/}
                   <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                   {/*icon */}
                   <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                     <BsArrowRight />
                   </div>
                 </Link>
               </div>
             </div>
           </div>
         })}
       </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default WorkSlider;
