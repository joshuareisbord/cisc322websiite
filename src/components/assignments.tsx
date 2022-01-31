import React, { useEffect, useState } from 'react';
import { fetchAssignments } from '../api';
import { SECTIONS } from '../constants/sections';
import { Assignment } from '../types/Assignments';
import generateRandomString from '../util/generateRandomString';

const AssignmentElement: React.FC<{ assignment: Assignment }> = ({ assignment }) => {
    return (
        <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4 hover:scale-105">
            <div className="relative h-80 mb-5 mx-auto rounded-lg">
                <img className="h-80 w-full relative rounded-lg object-cover" src={assignment.img} alt="" />
                <div className="absolute inset-0 bg-blue-600 opacity-75 rounded-lg"></div>
                <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <p className=" mb-1 text-2xl lg:text-2xl text-white font-bold">{assignment.title}</p>
                    <p className="mb-auto text-sm lg:text-1xl text-white font-bold">{assignment.desc}</p>
                    <a className="inline-block py-2 px-4 border-2 border-blue-200 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose" href={assignment.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
}

export const Assignments = () => {

    const [assignments, setAssignments] = useState<null | Assignment[]>(null)

    useEffect(() => {

        const getAssignments = async () => {

            const response = await fetchAssignments()
            if (!response) {
                return
            }
            console.log(response)
            setAssignments(response)
        }

        getAssignments()

    }, []);

    return (
        <section className="flex flex-col content-center relative py-20 bg-gray-900 radius-for-skewed min-h-screen" id={SECTIONS.ASSIGNMENTS}>
            <div className="m-auto container px-4 mx-auto">
                <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                    <div className="text-center lg:text-left">
                        {/* <span className="text-blue-600 font-bold">What have I been working on?</span> */}
                        <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">Assignments</h2>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 mb-4">

                    {

                        assignments ?

                            assignments.map((assignment) => {
                                return (
                                    <AssignmentElement assignment={assignment} key={generateRandomString(5)}/>
                                );
                            })
                            :
                            <div>loading...</div>
                    }
                </div>
            </div>
        </section>
    );
};


export default Assignments;