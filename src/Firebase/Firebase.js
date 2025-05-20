import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "import.meta.env.Vite_apiKey",
  authDomain: "import.meta.env.Vite_authDomain",
  projectId: "import.meta.env.Vite_projectId",
  storageBucket: "import.meta.env.Vite_storageBucket",
  messagingSenderId: "import.meta.env.Vite_messagingSenderId",
  appId: "import.meta.env.Vite_appId"
};


const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service 
export const auth = getAuth(app);