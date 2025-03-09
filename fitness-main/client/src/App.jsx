import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import './styles/Home.css'
import './styles/Login.css'
import './styles/Register.css'
import './styles/Navigation.css'
import { AuthProvider } from './Context/authContext';  // Ensure this is imported
import Navigation from './Navigation/Navigation';
import SubscriptionPage from  "./subscription/subscription"
import Accessclient from "./Clientsaccess/clientAccess"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Wrap your application in AuthProvider */}
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route path="/clentaccess"  element={<Accessclient/>} />
          <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* Add other routes as necessary */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

