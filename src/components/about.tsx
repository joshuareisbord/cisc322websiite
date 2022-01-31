import { SECTIONS } from "../constants/sections";

export const About = () => {

    return (
        <section className="flex flex-center flex-col bg-gray-900 h-screen justify-center items-center">

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">

                    <div className="w-full px-4 flex items-center justify-center text-center">

                        <div className="w-auto">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100">
                                <path className="fill-blue-600" d="M 134.369 9.373 A 15.623 15.623 0 1 0 149.994 25 A 15.623 15.623 0 0 0 134.369 9.377 M 134.369 34.377 A 9.374 9.374 0 1 1 143.745 25 A 9.375 9.375 0 0 1 134.369 34.374 M 15.62 9.374 A 15.623 15.623 0 1 0 25 37.5 V 40.62 H 31.25 V 25 A 15.623 15.623 0 0 0 15.62 9.373 M 15.62 34.373 A 9.374 9.374 0 1 1 25 25 A 9.375 9.375 0 0 1 15.625 34.374 M 105.36 40.623 H 99.111 V 0 H 105.36 V 40.62 Z M 115.375 40.623 H 109.125 V 0 H 115.375 V 40.62 Z M 80.105 9.373 A 15.577 15.577 0 0 0 68.934 14.073 A 20.573 20.573 0 0 0 67.334 15.916 L 70.982 21.753 L 71.015 21.699 A 19.593 19.593 0 0 1 73.16 18.699 A 9.374 9.374 0 1 1 73.16 31.291 A 19.629 19.629 0 0 1 71.015 28.291 L 64.825 18.385 A 24.074 24.074 0 0 0 61.605 14.07 A 15.625 15.625 0 0 0 34.808 25 V 50 H 41.058 V 37.5 A 15.626 15.626 0 0 0 61.6 35.92 A 20.528 20.528 0 0 0 63.2 34.077 L 59.552 28.24 L 59.519 28.294 A 19.629 19.629 0 0 1 57.374 31.294 A 9.374 9.374 0 1 1 57.374 18.702 A 19.593 19.593 0 0 1 59.519 21.702 L 65.709 31.602 A 28.3 28.3 0 0 0 68.929 35.917 A 15.624 15.624 0 1 0 80.1 9.37" transform="scale(2)"/>
                            </svg>


                            <h2 className="mb-3 text-3xl text-blue-200 font-bold">
                                <span>CISC 322 Project</span>
                            </h2>



                            <div className="max-w-sm mx-auto">
                                <p className="mb-6 text-gray-400 leading-loose"></p>
                                <div>
                                    <a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-blue-200 font-semibold rounded-l-xl rounded-t-xl transition duration-200" href={`#${SECTIONS.ASSIGNMENTS}`}>
                                        Assignments
                                    </a>
                                    <a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-blue-200 font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200" href={`#${SECTIONS.TEAM}`}>
                                        Our Team
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;
