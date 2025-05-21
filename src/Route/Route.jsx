import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddRecipe from "../Components/AddRecipe/AddRecipe";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MyRecipes from "../Components/MyRecipes/MyRecipes";
import RecipeDetails from "../Components/RecipeDetails/RecipeDetails";
import Updated from "../Components/Updated/Updated";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: ()=>fetch('http://localhost:3000/top-recipes'),
                Component: Home
            },
            {
                path: 'login',
                Component:Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'add-recipe',
                Component: AddRecipe
            },
            {
                path: 'my-recipes',
                loader: ()=>fetch('http://localhost:3000/recipes'),
                Component: MyRecipes
            },
            {
                path: 'recipe/:id',
                loader:({params})=>fetch(`http://localhost:3000/recipes/${params.id}`),
                Component: RecipeDetails
            },
            {
                path: 'update/:id',
                loader:({params})=>fetch(`http://localhost:3000/recipes/${params.id}`),
                Component: Updated
            }
        ]
    },
]);