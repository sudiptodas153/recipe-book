import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const About = () => {
  const {themes} = use(AuthContext)
  return (
    <section className={`${!themes && 'text-gray-800'} py-10 px-6 md:px-16`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Recipe Book</h2>
        <p className={`text-lg md:text-xl${!themes && 'text-gray-600'} mb-6`}>
          Welcome to <span className="font-semibold text-yellow-500">Recipe Book</span> – your go-to destination for discovering and sharing delicious recipes from around the world. Whether you're a beginner in the kitchen or a seasoned cook, we have something for everyone.
        </p>
        <p className={`text-base md:text-lg ${!themes && 'text-gray-700'}`}>
          Our platform allows users to browse, save, and even upload their own favorite recipes. Each recipe is presented with clear instructions, beautiful visuals, and helpful information to make your cooking journey easier and more enjoyable.
        </p>
        <p className={`text-base md:text-lg mt-4 ${!themes && 'text-gray-700'}`}>
          We believe that cooking should be fun, simple, and rewarding. So join us and start your culinary adventure today!
        </p>
      </div>
    </section>
  );
};

export default About;
