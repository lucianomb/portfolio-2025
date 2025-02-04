import Image from "next/image";

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image src={'/lu.png'} alt='Avatar' width={1022} height={778} className='translate-x-0 w-full h-full' />
  </div>;
};

export default Avatar;
