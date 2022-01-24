import React from 'react';

const tmp_proj = [

    {title: 'Assignment 1', desc: 'This assignment wont be fun.', img: 'https://i.kym-cdn.com/photos/images/newsfeed/002/165/983/ba9.png'},
    {title: 'Assignment 2', desc: 'This one wont be fun either.', img: 'https://i.kym-cdn.com/photos/images/newsfeed/002/165/969/b58.gif'},
    {title: 'Assignment 3', desc: 'This one might be okay.', img: 'https://i.kym-cdn.com/photos/images/newsfeed/002/165/971/665.png'},
    {title: 'Assignment 4', desc: 'I get the vibe this one will make me cry.', img: 'https://i.kym-cdn.com/photos/images/newsfeed/002/165/981/d83.jpg'},
    {title: 'Assignment 5', desc: 'Have I mentioned I find pepe funny?', img: 'https://pbs.twimg.com/media/E4-0JLsXEAAafJp?format=jpg&name=large'},
    {title: 'Assignment 6', desc: 'This is an assignment will be alright.', img: 'https://i.kym-cdn.com/photos/images/newsfeed/002/165/924/83a.gif'},


];

const Project: React.FC<{title: string, desc: string, img: string}> = ({title, desc, img}) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
                <div className="flex items-center mb-4">
                    <img className="h-16 w-16 rounded-full object-cover" src={img} alt="" />
                    <div className="pl-4">
                        <p className="text-xl">{title}</p>
                    </div>
                </div>
                <p className="text-blueGray-400 leading-loose">{desc}</p>
            </div>
        </div>
    );
}

export const Projects = () => {
    return (
        <section className="py-20 xl:bg-contain bg-top bg-no-repeat" id='projects'>
            <div className="container px-4 mx-auto">
                <div className="max-w-lg mx-auto mb-12 text-center">
                    <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar domor</h2>
                    <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">

                    {
                        tmp_proj.map((project) => {
                            return (
                                <Project title={project.title} desc={project.desc} img={project.img} />
                            );
                        })
                    }
                    
                </div>
            </div>
        </section>
    );
};


export default Projects;