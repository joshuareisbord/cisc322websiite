import React from 'react';
import './App.css';

import { ROUTES } from './constants/routes';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
    return (

        <div>

            <BrowserRouter>

                <Routes>

                    <Route path={`${ROUTES.HOME}` } element={<div>home</div>} />
                    <Route path={`${ROUTES.ABOUT}` } element={<div>about</div>} />
                    <Route path={`${ROUTES.TEAM}` } element={<div>team</div>} />
                    <Route path={`${ROUTES.PROJECTS}` } element={<div>projects</div>} />

                </Routes>



            </BrowserRouter>

        </div>

    );
}

export default App;
