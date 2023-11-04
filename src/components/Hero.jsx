import React from 'react';
import jsImage from "../assets/js.png";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <main id='main' className="relative">
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src={jsImage}
        alt="jsimage"
        style={{ opacity: 0.8 }}
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[700px] mx-auto'>
        <h1 className='sm:text-5xl text-4xl font-bold mb-4 text-black'>Hi, I'm Mateo Bustamante</h1>
        <h2 className='sm:text-3xl text-2xl mb-4 text-black'>
          <TypeAnimation
            sequence={['Im Full Stack Developer', 2200, 'Im Enthusiast Tech', 2000]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ paddingLeft: '5px', color: 'black' }}
          />
        </h2>
        <div className='flex justify-center max-w-[200px] mx-auto'>
          <a href="https://github.com/Mateobustamante1" target='_blank' className='mr-4'>
            <FaGithub size={30} className='cursor-pointer hover:scale-110 duration-100 ease-in-out' />
          </a>
          <a href="https://www.linkedin.com/in/mateo-bustamante-bb3986222/" target='_blank'>
            <FaLinkedin size={30} className='cursor-pointer hover:scale-110 duration-100 ease-in-out' />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
