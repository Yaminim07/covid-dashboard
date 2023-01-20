import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import Context from './Context/CountryContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Context>
  </React.StrictMode>,
  document.getElementById('root'),
);
