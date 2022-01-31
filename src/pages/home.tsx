import React from "react"
import About from "../components/about";
import Assignments from "../components/assignments";

import Team from "../components/team";

import Break from "../components/break";

const Home: React.FC = () => {

    return (

        <div>
            <About />
            <Break />
            <Assignments />
            <Break />
            <Team />
            <Break />
        </div>
       
    );

}


export default Home