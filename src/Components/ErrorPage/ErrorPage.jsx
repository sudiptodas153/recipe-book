import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50 px-4">
      <div className="text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/135/135763.png"
          alt="Not Found"
          className="mx-auto w-40 md:w-60 mb-6"
        />

        <h1 className="text-5xl font-extrabold text-yellow-600 mb-2">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! Recipe not found
        </p>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          The page you're looking for may have been removed or is temporarily unavailable. Try heading back to the homepage.
        </p>

        <Link
          to="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg transition duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
