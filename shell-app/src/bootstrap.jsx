import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'; // Consistent import




const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);