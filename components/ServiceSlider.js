// icons
import {
    RxArrowTopRight, RxCode, RxCube, RxDesktop, RxGlobe, RxMobile, RxPencil2, RxStack,
} from "react-icons/rx";
import {FreeMode, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
const serviceData = [
  {
    title: 'Custom Web Development with NextJS and React',
    icon: <RxCode />,
    description: 'I create high-performance websites using the latest NextJS and React technologies. Whether you need a dynamic web app or a content-heavy site, I’ll ensure speed, scalability, and seamless user experience.',
  },
  {
    title: 'Interactive 3D Animations with Three.js',
    description: 'Bring your website to life with stunning 3D animations. I use Three.js to deliver unique, interactive experiences that captivate your users and set your site apart from the rest.',
      icon: <RxCube />
  },
    {
        title: 'Mobile App Development with Flutter and React Native',
        description: 'Need a mobile app for both iOS and Android? I can build cross-platform apps using Flutter or React Native that offer smooth performance and a great user experience.',
        icon: <RxMobile />
    },
    {
        title: 'WordPress Development and Customization',
        description: 'I specialize in building custom WordPress sites, whether it’s an e-commerce store, blog, or corporate website. I’ll tailor your WordPress site to your needs with responsive themes, plugins, and seamless integration.',
        icon: <RxGlobe />
    },
    {
        title: 'Full Stack Development with Seamless Backend Integration',
        description: 'From server-side development to database management, I offer complete full-stack web development. I ensure smooth backend integration with your front-end, so everything works seamlessly.',
        icon: <RxStack />
    },
    {
        title: 'Next-Level UI/UX Design and Web Animation',
        description: 'Enhance user engagement with modern UI/UX design. I integrate smooth animations and modern interfaces to create websites that not only look great but are easy to navigate.',
        icon: <RxPencil2 />
    }

];

const ServiceSlider = () => {
  return <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[400px] sm:h-auto'
  >
    {serviceData.map((item, index) => {
      return <SwiperSlide key={index}>
        <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
          {/* icon */}
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          {/*title & desc*/}
          <div className='mb-8 '>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[350px] leading-normal '>{item.description}</p>
          </div>
          {/*arrow*/}
          <div className='text-3xl'>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300 ' />
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default ServiceSlider;
