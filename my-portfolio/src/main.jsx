import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true,     // Animation will happen only once
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
