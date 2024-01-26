import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SingleMoviePage from "../Pages/SingleMoviePage";

export default function Router() {
    const abc = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/series/:id",
            element: <SingleMoviePage />,
        },
    ]);
    return <RouterProvider router={abc}/>;
}