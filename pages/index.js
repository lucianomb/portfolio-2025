import ProjectsBtn from "../components/ProjectsBtn";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return <div className='bg-primary/60 h-full'>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
        >Bringing Your Ideas <br /> to <span className='text-accent'>Real Life</span></motion.h1>
        <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
            I am a web developer with a passion for creating beautiful, responsive websites that are easy to use and maintain. I specialize in front-end development, but I also have experience with back-end technologies. I can help you bring your ideas to life.
        </motion.p>
        <div className="flex justify-center xl:hidden relative z-10">
          <ProjectsBtn />
        </div>
        <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
    {/*  particles */}
      <ParticlesContainer />
    {/*  avatar img */}
        <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='w-full h-auto max-w-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
         <Avatar />
       </motion.div>
    </div>
  </div>;
};

export default Home;
