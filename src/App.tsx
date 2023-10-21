import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home.page';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  
  const { data, isLoading, isError, refetch } = useQuery('global-query', fetchData);
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <HomePage/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
