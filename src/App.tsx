import React from "react";
import "./App.css";

import { ROUTES } from "./constants/routes";


import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header";

import Home from './pages/home'
import Footer from "./components/footer";


const reactQueryClient = new QueryClient();



const App = () => {
    return (
        <QueryClientProvider client={reactQueryClient}>
            <div className={'flex flex-col min-h-screen'}>

                {/* header */}
                <div><Header/></div>


                <div className={'flex-grow'}>
                    {/* Stuff between header and footer */}
                    <BrowserRouter>
                        <Routes>

                            {/* Auto navigate to home route when at root. */}
                            <Route path={''} element={<Navigate to={`${ROUTES.HOME}`} />} />
                            <Route path={'/'} element={<Navigate to={`${ROUTES.HOME}`} />} />

                            <Route path={`${ROUTES.HOME}`} element={<Home />} />
                            <Route path={`${ROUTES.ABOUT}`} element={<div>about</div>} />
                            <Route path={`${ROUTES.TEAM}`} element={<div>team</div>} />
                            <Route path={`${ROUTES.PROJECTS}`} element={<div>projects</div>} />
                        </Routes>
                    </BrowserRouter>
                </div>

                {/* footer */}
                <div><Footer /></div>
            </div>
        </QueryClientProvider>
    );
}

export default App;
