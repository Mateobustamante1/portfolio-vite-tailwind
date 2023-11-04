import React from "react";
import jsImage from "../assets/js.png"; // Importa la imagen desde la carpeta assets
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={jsImage} alt="jsimage" /> {/* Utiliza la imagen importada aquí */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-7xl mx-auto h-full flex flex-col justify-center items-center'>
                    <h1 className='text-5xl text-gray-800 font-bold sm:text-6xl'>I'm Mateo Bustamante</h1>
                    <h2 className='pt-4 text-3xl text-gray-800'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Im a Full Stack Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'I’m a tech Enthusiast',
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-200'>
                        <FaLinkedin className='cursor-pointer text-4xl text-gray-800 mr-4' />
                        <FaGithub className='cursor-pointer text-4xl text-gray-800' />
                    </div>                
                </div>
            </div>
        </div>
    );
};

export default Main;

