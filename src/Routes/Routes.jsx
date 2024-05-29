import {createBrowserRouter,} from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root";




const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/",
                element: <Home/>
               
            },
           
        ],
    },
]);



export default Routes;