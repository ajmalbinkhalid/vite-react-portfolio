import React from 'react';
import { FaGithub } from 'react-icons/fa';
import SpotlightCard from '../react bits compnts/SpotlightCard';

const ProjectCard = ({ imageSrc, isVideo, title, description, technologies, githubLink }) => {
    return (
        <div data-aos="fade-up">
            <SpotlightCard
                spotlightColor="black"


            >
                <div className=" flex flex-col justify-center items-center w-90 sm:w-90 md:w-90 lg:w-90
            transition-all duration-300 hover:scale-x-105 hover:scale-y-105" >

                    {/* Media Section */}
                    <div className="w-full h-40 bg-black">
                        {isVideo ? (
                            <video className="w-full h-full object-fill" src={imageSrc} muted autoPlay loop />
                        ) : (
                            <img className="w-full h-full object-fill" src={imageSrc} alt={title} />
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

                        {/* Tech Stack */}
                        <div className="text-sm font-mono inline-flex gap-2">
                            {technologies.map((tech, index) => (
                                <span key={index} className="bg-blue-700 px-2 py-2 rounded-md ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* GitHub Link */}
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm hover:underline mt-2 "
                            >
                                <FaGithub size={20} />
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </SpotlightCard>
        </div>

    );
};

export default ProjectCard;
