import React from 'react';
import Home from '../pages/home';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from '../components/footer';

import {ROUTES} from '../constants/routes'

const Main = () => {
    return (
        <div>
            <div className={'flex flex-col min-h-screen'}>

                <div className={'flex-grow'}>
                    {/* Stuff between header and footer */}
                    <BrowserRouter>
                        <Routes>

                            {/* Auto navigate to home route when at root. */}
                            <Route path={''} element={<Navigate to={`${ROUTES.HOME}`} />} />
                            <Route path={'/'} element={<Navigate to={`${ROUTES.HOME}`} />} />

                            <Route path={`${ROUTES.HOME}`} element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </div>

                {/* footer */}
                <div><Footer /></div>
            </div>
        </div>
    );
};

export default Main;
