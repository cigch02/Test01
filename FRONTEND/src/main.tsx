import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { searchCompanies } from './api.tsx';
import { routes } from './Routes/Routes.tsx';
import { RouterProvider } from "react-router-dom";

console.log(searchCompanies("tsla"));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
