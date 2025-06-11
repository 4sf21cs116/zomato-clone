import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './Components/CartContext.jsx'
import {AuthProvider} from './Components/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
);
