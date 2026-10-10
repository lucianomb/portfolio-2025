// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma, FaElementor,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop, SiTailwindcss, SiWpengine, SiTypescript, SiApple, SiFlutter,
} from "react-icons/si";
import {useState} from "react";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import {motion} from "framer-motion";
import {fadeIn} from "../../variants";
import CountUp from "react-countup";
import {BiLogoAndroid} from "react-icons/bi";
import {TbBrandThreejs} from "react-icons/tb";
import {useTranslation} from "../../locales";

//  skill icons, in the same order as the skills in the locale files
const skillIcons = [
  [
    <FaHtml5 key={0} />,
    <FaCss3 key={1} />,
    <FaJs key={2} />,
    <FaReact key={3} />,
    <SiNextdotjs key={4} />,
    <SiFramer key={5} />,
    <SiTailwindcss key={6} />,
    <SiTypescript key={7} />,
    <TbBrandThreejs key={8} />,
  ],
  [
    <FaWordpress key={9} />,
    <FaElementor key={10} />,
    <SiWpengine key={11} />,
  ],
  [
    <SiApple key={12} />,
    <BiLogoAndroid key={13} />,
    <SiFlutter key={14} />,
  ],
  [<FaFigma key={15} />, <SiAdobexd key={16} />, <SiAdobephotoshop key={17} />],
];

const About = () => {
  const [index, setIndex] = useState(0);
  const t = useTranslation();
  const {skills, experience, credentials} = t.about.tabs;
  const aboutData = [
    {
      title: skills.title,
      info: skills.info.map((title, i) => ({title, icons: skillIcons[i]})),
    },
    experience,
    credentials,
  ];

  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      className="hidden xl:flex absolute bottom-0 -left-[240px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className='flex-1 flex flex-col justify-center '>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2'>{t.about.title}<span className='text-accent'>{t.about.titleAccent}</span></motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          {t.about.description}
        </motion.p>
        {/* counters */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={15} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{t.about.counters.experience}</div>
            </div>
            {/* clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={150} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{t.about.counters.clients}</div>
            </div>
            {/* projects */}
            <div className="relative flex-1">
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={300} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{t.about.counters.projects}</div>
            </div>
            {/* awards */}
            {/*<div className="relative flex-1">*/}
            {/*  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>*/}
            {/*    <CountUp start={0} end={3} duration={5} />*/}
            {/*  </div>*/}
            {/*  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning Awards</div>*/}
            {/*</div>*/}
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
            )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
                <div key={item.index} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div className='text-sm'>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => (
                        <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                    ))}
                  </div>
                </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
