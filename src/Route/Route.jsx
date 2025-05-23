import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddRecipe from "../Components/AddRecipe/AddRecipe";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MyRecipes from "../Components/MyRecipes/MyRecipes";
import RecipeDetails from "../Components/RecipeDetails/RecipeDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyRecipe from "../Components/MyRecipe/MyRecipe";
import AllRecipe from "../Components/AllRecipe/AllRecipe";
import Loader from "../Components/Loader/Loader";
import AddChef from "../Components/AddChef/AddChef";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('https://recipe-database-zeta.vercel.app/top-recipes'),
                hydrateFallbackElement: <Loader></Loader>,
                Component: Home
            },
            {
                path: 'login',
                hydrateFallbackElement: <Loader></Loader>,
                Component: Login
            },
            {
                path: 'register',
                hydrateFallbackElement: <Loader></Loader>,
                Component: Register
            },
            {
                path: 'add-recipe',
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
            },
            {
                path: 'all-recipe',
                loader: () => fetch('https://recipe-database-zeta.vercel.app/recipes'),
                hydrateFallbackElement: <Loader></Loader>,
                Component: AllRecipe
            },
            {
                path: 'my-recipes',
                loader: () => fetch(`https://recipe-database-zeta.vercel.app/recipes`),
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
            },
            
            {
                path: 'recipe/:id',
                loader: ({ params}) => fetch(`https://recipe-database-zeta.vercel.app/recipes/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
            },
            {
                path: 'add-Chef',
                hydrateFallbackElement: <Loader></Loader>,
                Component: AddChef
            }

        ]
    },
]);