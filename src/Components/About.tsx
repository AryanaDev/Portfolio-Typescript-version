import React from "react";
import Item1 from '../Assets/Item1.png';


const About:React.FC = () => {
    return(
        <div className='w-full h-screen mb-16 md:min-w-fit sm:min-w-fit sm:mb-80 sm:mt-16  overflow-y-auto max-h-[300] sm:max-h-fit '>
            <div id='about' className="flex flex-col md:flex-row lg:flex-row md:h-auto p-8 md:p-36 justify-center items-center">
                <div className="md:w-1/2">
                    <img src={Item1} alt="Portfolio Item" className="w-full lg:w-full max-w-xl" />
                </div>
                <div className="md:w-1/2 p-4 mt-4 md:mt-0 mb-8 md:mb-16">
                    <p className="font-semibold mt-0 md:mt-5 text-white lg:text-2xl md:text-xl sm:text-md text-2xl ">
                        Crafting Seamless Digital Experiences:
                        <span className="block text-white font-semibold text-left w-5/6 ">
                            Aryana's Front-End Development Journey
                        </span>
                    </p>
                    <br />
                    <p className="text-white font-semibold justify-start text-left lg:text-xl md:text-md sm:text-sm text-xs">
                        Greetings! I'm Aryana, a passionate front-end developer. In the past two years, I've been creating intuitive user experiences using React, JavaScript, HTML, CSS, and TypeScript, and leveraging the power of Tailwind CSS. I'm dedicated to crafting visually stunning and robust websites. Let's create memorable online experiences together!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
