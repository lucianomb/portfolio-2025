import Link from "next/link";
import {
  RiGithubLine,
  RiInstagramLine, RiLinkedinLine,
} from "react-icons/ri";
import {SiUpwork} from "react-icons/si";

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href='https://www.upwork.com/fl/~018dd9c27926a71ca4?mp_source=share' target='_blank' title='Upwork' className='hover:text-accent transition-all duration-300'>
      <SiUpwork />
    </Link>
    <Link href='https://www.linkedin.com/in/lucianomb/' target='_blank' title='LinkedIn' className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href='https://github.com/lucianomb' target='_blank' title='GitHub' className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href='https://www.instagram.com/luciano.mb' target='_blank' title='Instagram' className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
  </div>;
};

export default Socials;
