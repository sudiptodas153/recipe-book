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



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('https://recipe-database-zeta.vercel.app/top-recipes'),
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'add-recipe',
                element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
            },
            {
                path: 'all-recipe',
                Component: AllRecipe
            },
            {
                path: 'my-recipes',
                loader: () => fetch('https://recipe-database-zeta.vercel.app/recipes'),
                element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
            },
            {
                path: 'recipe/:id',
                loader: ({ params }) => fetch(`https://recipe-database-zeta.vercel.app/recipes/${params.id}`),
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
            },
           
        ]
    },
]);