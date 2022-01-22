import React from "react";
import "./App.css";

import { ROUTES } from "./constants/routes";


import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/home'

const reactQueryClient = new QueryClient();



const App = () => {
    return (
        <div>
            <QueryClientProvider client={reactQueryClient}>
                <div>

                    {/* header */}

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

                    {/* footer */}

                </div>
            </QueryClientProvider>
        </div>
    );
}

export default App;
