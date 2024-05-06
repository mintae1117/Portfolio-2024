import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>안녕하세요. 프론트엔드 개발자<br/>김민태라고 합니다.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        안녕하세요! 2024년 2월에 부산대 정보컴퓨터공학과를 졸업하고 신입 프론트엔드 개발자로 취업을 준비하고 있는 김민태 라고 합니다.
        제 좌우명은 미련없이 보내고, 남은것에 감사하고, 새로운 것을 두려워 말자 입니다.
        저는 주어진 업무에 있어서 책임감을 가지고 완성도 높은 마무리를 해내는 개발자를 목표로 하고 있습니다.
        그리고 저는 이러한 개발자가 되기 위한 자세들 이전에 인간적으로 쫌더 성숙하고, 선한 영향력을 주변에 나누며 살아가기위해 노력하고 있습니다. 
        이러한 자세로 살아가는 삶이 더 좋은 세상을 만드는데 크게 기여한다고 굳게 믿고 있으며, 
        이것이 본인에게도 엄청난 행복을 가져다 준다고 생각하고 있습니다.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
