import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAssignments } from '../api';
import { Project } from '../types/Projects';
import generateRandomString from '../util/generateRandomString';

const ProjectElement: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
                <div className="flex items-center mb-4">
                    <img className="h-16 w-16 rounded-full object-cover" src={project.img} alt="" />
                    <div className="pl-4">
                        <p className="text-xl">{project.title}</p>
                        <p className='text-xs hover:underline'> <Link to={project.link}>Video Presentation</Link> </p>
                    </div>
                </div>
                <p className="text-blueGray-400 leading-loose">{project.desc}</p>
            </div>
        </div>
    );
}

export const Projects = () => {

    const [projects, setProjects] = useState<null | Project[]>(null)

    useEffect(() => {

        const getAssignments = async () => {

            const response = await fetchAssignments()
            if (!response) {
                return
            }
            console.log(response)
            setProjects(response)
        }

        getAssignments()


    }, []);

    return (
        <section className="py-20 xl:bg-contain bg-top bg-no-repeat" id='projects'>
            <div className="container px-4 mx-auto">
                <div className="max-w-lg mx-auto mb-12 text-center">
                    <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Projects</h2>
                    <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">

                    {
                        projects ?

                            projects.map((proj) => {
                                return (
                                    <ProjectElement
                                        key={generateRandomString(5)}
                                        project={proj}
                                    />
                                );
                            })

                            :

                            <h1>loading...</h1>
                            
                    }

                </div>
            </div>
        </section>
    );
};


export default Projects;