import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home.page';
import LoginScreen from './pages/Login.page';
import { useQuery } from 'react-query';
import Router from 'react-easy-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SettingsPage from './pages/Settings.page';

function App() {
  const { data, isLoading, isError, refetch } = useQuery('global-query', () => { });

  const routes = [
    {
      path: "/",
      navigate: "/login"
    },
    {
      path: "/login",
      element: <LoginScreen/>
    },
    {
      path: "/files",
      element: <HomePage/>
    },
    {
      path: "/settings",
      element: <SettingsPage/>
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer/>
          <Router routes={routes} />  
      </BrowserRouter>
    </div>
  );
}

export default App;
