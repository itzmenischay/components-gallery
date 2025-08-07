import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import Body from './components/body/Body.jsx';
import Contact from './components/contact/Contact.jsx';
import Backgrounds from './components/backgrounds/Backgrounds.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use App layout
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'components',
        element: <Body />
      },
      {
        path: 'backgrounds',
        element: <Backgrounds/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
