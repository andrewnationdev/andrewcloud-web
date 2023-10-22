import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home.page';
import LoginScreen from './pages/Login.page';
import { useQuery } from 'react-query';
import Router from 'react-easy-router';
import { BrowserRouter } from 'react-router-dom';

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
    }
  ]

  return (
    <div className="App">
      <BrowserRouter><Router routes={routes} /></BrowserRouter>
    </div>
  );
}

export default App;
