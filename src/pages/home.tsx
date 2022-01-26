import React from "react"
import About from "../components/about";
import Assignments from "../components/assignments";

import Team from "../components/team";

const Home: React.FC = () => {

    return (

        <div>
            <About />
            <Assignments />
            <Team />
        </div>
       
    );

}


export default Home