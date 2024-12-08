import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";


const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            
        },
        {
            path: '/news',
            element: <h1>news page</h1>,
            
        },
        {
            path: '/auth',
            element: <h1>auth page</h1>,
            
        },
        {
            path: '/*',
            element: <h1>error page</h1>,
            
        },

    ]
)

export default Router;