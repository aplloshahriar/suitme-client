import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
// import Men from "../Pages/Men/Men";
import Men from "../Men/Men";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
            path: '/',
            element: <Home></Home>,
        },
            {
            path: 'men',
            element: <Men></Men>,
        },
    ]
    },
]);

export default router;