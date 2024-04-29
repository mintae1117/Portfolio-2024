import { color, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import styled from "styled-components";

const ScrollText = styled.p`
  cursor: pointer;
  margin-left: 10px;
`;

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#8060B6]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#8060B6]' >Mintae!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            안녕하세요. 저는 <span className='text-[#8060B6]' >김민태</span>라고 합니다.
          </p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              1200,
              'My motto is "Let go without hesitation."',
              1200,
              'My motto is "Be grateful for what is left."',
              1200,
              'My motto is "Do not fear of new things."',
            ]}
            speed={50}
            deletionSpeed={80}
            repeat={Infinity}
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{color:"#8060B6"}}
          />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 left-10 w-full flex items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
        <a href='#about'>
          <ScrollText>
            Scroll down
          </ScrollText>
        </a>
      </div>
    </section>
  );
};

export default Hero;
