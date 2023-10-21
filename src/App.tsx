import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home.page';
import LoginScreen from './pages/Login.page';
import { useQuery } from 'react-query';
import Router from 'react-easy-router';

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

  const routes = [...routes];

  return (
    <div className="App">
      <Router routes={routes} />
    </div>
  );
}

export default App;
