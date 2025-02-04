import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  return <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
        <Link href={'/'}>
          <Image className='object-center object-contain' src={'/lmb.svg'} alt='logo' width={245} height={34} priority={true} />
        </Link>
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
