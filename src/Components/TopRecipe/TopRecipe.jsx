
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Recipes from '../Recipes/Recipes';
import { Link } from 'react-router';


const TopRecipe = ({ data }) => {

     const {themes} = use(AuthContext);

    return (
        <div>
            <div className='mb-5 md:mb-10 space-y-3 text-center'>
                <h2 className='text-3xl md:text-5xl font-bold  '>Top Recipe</h2>
                <p className={`${themes && 'text-white'} text-gray-700 md:px-10`}>Discover the finest culinary creations from our master chefs in this specially curated Top Recipe collection. Each dish has been selected based on popularity, taste, and user ratings — ensuring that you only get the best of the best. Whether you're in the mood for something quick and easy, a comforting classic, or a gourmet delight, our top recipes cater to every craving. Let your cooking journey begin with inspiration from those who know flavor best. Taste the difference, one recipe at a time.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    data.map(recipe => <Recipes key={recipe._id} recipe={recipe}></Recipes>)
                }
            </div>
            <div className='flex justify-center'><Link to={'/all-recipe'}><button className='btn mt-5 bg-yellow-300 text-lg text-white font-bold'>See All Recipes</button></Link></div>





            
        </div>
    );
};

export default TopRecipe;