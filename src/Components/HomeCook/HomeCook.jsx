import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const HomeCook = () => {
    const {themes} = use(AuthContext)
    return (
        <div>
            <div className="my-16 px-4 max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Cooking at Home is Better</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {/* Reason 1 */}
    <div className={`${!themes ? 'bg-orange-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center`}>
      <div className="text-4xl mb-4">💰</div>
      <h3 className="text-xl font-bold mb-2">Saves Money</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Homemade meals are more affordable than eating out regularly.</p>
    </div>

    {/* Reason 2 */}
    <div className={`${!themes ? 'bg-orange-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center`}>
      <div className="text-4xl mb-4">🧂</div>
      <h3 className="text-xl font-bold mb-2">Full Control of Ingredients</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>You can choose fresh and healthy ingredients without additives.</p>
    </div>

    {/* Reason 3 */}
    <div className={`${!themes ? 'bg-orange-50' : 'border border-gray-400'} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center`}>
      <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
      <h3 className="text-xl font-bold mb-2">Family Bonding</h3>
      <p className={`${!themes ? 'text-gray-700' : 'text-gray-400'}`}>Cooking together creates memorable moments with loved ones.</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default HomeCook;