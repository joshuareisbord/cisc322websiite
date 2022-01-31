import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";


import Main from "./layout/main";


const reactQueryClient = new QueryClient();



const App = () => {
    return (
        <QueryClientProvider client={reactQueryClient}>
            <Main />
        </QueryClientProvider>
    );
}

export default App;
