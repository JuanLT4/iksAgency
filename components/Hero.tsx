import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
      >
        <h1 className="bold-52 lg:bold-88">
          IKS <span className="text-blue-400">Technologies</span>
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Informed with Knowledge to create Solutions
          <br />
          Empowering organizations with innovative, affordable software to drive growth and efficiency.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="my-11 flex flex-wrap gap-5"
        >
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col w-full gap-3 sm:flex-row"
        >
          <Button type="button" title="Get in Touch" variant="btn_blue" />
          <Button type="button" title="How we work?" icon="/play.svg" variant="btn_white_text" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        <Image src={'/ai.webp'} alt='' width={1000} height={1000} className='w-[500px] h-auto rounded-full img-transition hover-scale'/>
      </motion.div>
    </section>
  );
};

export default Hero;
