import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBmNtD4XROjbp3u6xWG40eilF8umwbUTLs",
	authDomain: "my-first-app-74b71.firebaseapp.com",
	databaseURL: "https://my-first-app-74b71.firebaseio.com",
	projectId: "my-first-app-74b71",
	storageBucket: "",
	messagingSenderId: "697084337384"
};
initializeApp(config);

createRoot(document.getElementById('root')).render(<App />);
