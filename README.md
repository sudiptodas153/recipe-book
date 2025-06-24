# Recipe Book

**Live Site:** [https://recipe-book-202dc.web.app](https://recipe-book-202dc.web.app)

---

## Project Overview

Recipe Book is a dynamic recipe management web application where users can browse, view, and interact with a collection of delicious recipes.  
The project features a clean UI and leverages Firebase authentication for a secure login system.

---


## Technology Stack

- React.js
- Tailwind CSS
- Firebase Authentication
- React Router DOM
- DaisyUI
- Axios

---

## Key Features

- User authentication using Firebase
- View recipe details with ingredients and instructions
- Responsive design with clean UI
- Loading states and error handling
- Conditional rendering for protected routes

---

## Dependencies

- react
- react-dom
- react-router-dom
- firebase
- axios
- tailwindcss
- daisyui

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sudiptodas153/recipe-book.git
   
2. Navigate to the project folder:
   ```bash
   cd your-recipe-repo
   
3. Install dependencies:
   ```bash
   npm install
   
4. Start the development server:
   ```bash
   npm run dev




## Endpoints Overview

| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| GET    | `/recipes`                | Get all recipes                 |
| GET    | `/recipes/:id`            | Get a single recipe             |
| POST   | `/recipes`                | Add a new recipe (auth required)|
| PUT    | `/recipes/:id`            | Update recipe (auth required)   |
| DELETE | `/recipes/:id`            | Delete recipe (admin only)      |
| POST   | `/jwt`                    | Generate JWT from Firebase user |

*More endpoints may be available depending on your actual routes.*

---

## Environment Variables (`.env`)

Create a `.env` file in the root directory and add the following:
