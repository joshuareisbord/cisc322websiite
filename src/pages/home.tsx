import React from "react"
import About from "../components/about";
import Projects from "../components/projects";

import Team from "../components/team";

const Home: React.FC = () => {

    return (

        <div>
            <About />
            <Projects />
            <Team />
        </div>
       
    );

}


export default Home