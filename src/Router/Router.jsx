
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import News from "../Components/News";



const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '',
                    element: <Navigate to={'/category/01'}></Navigate>,
                },
                {
                    path: "/category/:id",
                    element: <News></News>,
                    loader: ({params}) =>
                        fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                },
            ],

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