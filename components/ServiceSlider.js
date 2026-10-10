// icons
import {
    RxArrowTopRight, RxCode, RxCube, RxDesktop, RxGlobe, RxMobile, RxPencil2, RxStack,
} from "react-icons/rx";
import {FreeMode, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {useTranslation} from "../locales";

// icons, in the same order as the services in the locale files
const serviceIcons = [
  <RxCode key={0} />,
  <RxCube key={1} />,
  <RxMobile key={2} />,
  <RxGlobe key={3} />,
  <RxStack key={4} />,
  <RxPencil2 key={5} />,
];

const ServiceSlider = () => {
  const t = useTranslation();
  const serviceData = t.services.items.map((item, index) => ({...item, icon: serviceIcons[index]}));

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
