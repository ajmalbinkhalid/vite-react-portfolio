import React from "react";
import StarBorder from "../react bits compnts/StarBorder.jsx";
import ButtonWithProps from "../props compnts/ButtonWithProps.jsx";
import { FaArrowRight } from "react-icons/fa";
import GradientText from "../react bits compnts/GradientText.jsx";

const HomeContent = () => {
    return (

        <div data-aos="fade-up-right" className="flex flex-col gap-6 max-w-2xl">
            
            {/* Intro Text */}
            <div className="flex flex-col gap-2 text-xl sm:text-3xl">

                <div className="font-medium">
                    Hi I'm,
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class text-4xl"
                    >
                    Ajmal Bin Khalid
                    </GradientText>
                </div>
                <span className="text-4xl sm:text-5xl font-bold">
                    Frontend Web Developer
                </span>
            </div>

            {/* Role Text */}
            <div className="flex flex-col gap-3 text-xl sm:text-xl text-neutral-400 max-w-2xl">
                <span className="text-base sm:text-2xl">
                    I build exceptional digital experiences
                </span>
                <span className="text-white">
                    An innovative & passionate frontend Web developer focused on
                    creating dynamic and user-friendly web applications with modern
                    technologies.
                </span>
            </div>

            {/* Buttons */}
            <div className="inline-flex gap-8">

                <StarBorder
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="7s"
                    thickness='3' >
                    <ButtonWithProps
                        text="My Work"
                        icon={FaArrowRight}
                        download={true}
                        href=''
                        className="border-blue-300 border-2 px-10 "
                    />
                </StarBorder>

                <StarBorder
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="7s"
                    thickness='3'>
                    <ButtonWithProps
                        text="Contact Me"
                        download={true}
                        href=''
                        className="border-blue-300 border-2 px-10 "
                    />
                </StarBorder>
            </div>
        </div>
    );
};

export default HomeContent;
