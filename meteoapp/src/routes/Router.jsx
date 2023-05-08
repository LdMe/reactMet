import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Prediction from "../components/Prediction";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h1>404 Not Found</h1>,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: '/prediction',
        element: <Prediction />,
        children: [
            {
                path: ':id',
                element: <Prediction />,
            }
        ]
    },
]);

export default Router;