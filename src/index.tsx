import React from 'react';
import './index.css';
import App from './App';
import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container); // Ensure TypeScript does not complain
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('The root container with id "app" was not found.');
}

reportWebVitals();

