import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { worker } from './mocks/browser';

import './assets/css/tailwind.css';

if (window.location.pathname === '/optimistic-updates-demo') {
  window.location.pathname = '/optimistic-updates-demo/'
}

worker.start({
  serviceWorker: {
    url: '/optimistic-updates-demo/mockServiceWorker.js',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
