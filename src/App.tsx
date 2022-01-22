import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import "./App.css";

import { ROUTES } from "./constants/routes";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const reactQueryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={reactQueryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={`${ROUTES.HOME}`} element={<div>home</div>} />
            <Route path={`${ROUTES.ABOUT}`} element={<div>about</div>} />
            <Route path={`${ROUTES.TEAM}`} element={<div>team</div>} />
            <Route path={`${ROUTES.PROJECTS}`} element={<div>projects</div>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
