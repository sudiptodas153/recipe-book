import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Healthy = () => {
  const {themes} = use(AuthContext)
    return (
        <div>
            <div className=" px-4 max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Healthy Eating Tips</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className={`${!themes ? 'bg-green-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}>
      <h3 className="text-xl font-bold mb-2">Use Fresh Ingredients</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Always try to cook with fresh and seasonal vegetables and fruits.</p>
    </div>

    {/* Card 2 */}
    <div className={`${!themes ? 'bg-green-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}>
      <h3 className="text-xl font-bold mb-2">Balance Your Meals</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Include protein, carbs, and fiber in your meals for complete nutrition.</p>
    </div>

    {/* Card 3 */}
    <div className={`${!themes ? 'bg-green-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}>
      <h3 className="text-xl font-bold mb-2">Cook with Less Oil</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Try to bake, steam or grill instead of deep-frying to cut down on fat.</p>
    </div>

    {/* Card 4 */}
    <div className={`${!themes ? 'bg-green-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}>
      <h3 className="text-xl font-bold mb-2">Stay Hydrated</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Drink at least 8 glasses of water a day to support your body's functions.</p>
    </div>

    {/* Card 5 */}
    <div className={`${!themes ? 'bg-green-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}>
      <h3 className="text-xl font-bold mb-2">Reduce Processed Foods</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Avoid foods with artificial ingredients or high sugar and salt content.</p>
    </div>

    {/* Card 6 */}
    <div className={`${!themes ? 'bg-green-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}>
      <h3 className="text-xl font-bold mb-2">Practice Portion Control</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Eat in moderation and avoid overeating even if the food is healthy.</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Healthy;