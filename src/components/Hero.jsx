import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import styled from "styled-components";

const ScrollText = styled.p`
  cursor: pointer;
  position: absolute;
  left: 45px;
  top: 20px;
`;

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5 animate-slidein100 opacity-0'>
          <div className='w-5 h-5 rounded-full bg-[#5A4481]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white animate-slidein100 opacity-0`}>
            Hi, I'm <span className='text-[#5A4481]' >Mintae!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 animate-slidein200 opacity-0`}>
            안녕하세요. 저는 <span className='text-[#5A4481]' >김민태</span>라고 합니다.
          </p>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              // Same substring at the start will only be typed once, initially
              2200,
              'My motto is "Let go without hesitation."',
              2200,
              'My motto is "Be grateful for what is left."',
              2200,
              'My motto is "Do not fear of new things."',
            ]}
            speed={60}
            deletionSpeed={80}
            repeat={Infinity}
            className={`${styles.heroSubText} mt-2 text-white-100 animate-slidein300 opacity-0`}
            style={{color:"#5A4481"}}
          />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 left-10 w-full flex items-center animate-slidein400 opacity-0'>
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
          <ScrollText>
            Scroll down
          </ScrollText>
        </a>
      </div>
    </section>
  );
};

export default Hero;
