import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home/Home"
import SearchPage from "../Pages/SearchPage/SearchPage"
import CompanyPage from "../Pages/CompanyPage/CompanyPage"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/search", element: <SearchPage />},
            {path: "/company/:symbol", element: <CompanyPage />}
        ]
    }
])