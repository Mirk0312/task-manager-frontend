import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

//busca en el html el elemento con el id "root"
const rootElement = document.getElementById('root');

//Si no encuentra root lanza erro 
if (!rootElement) {
  throw new Error('No se encontró el elemento #root.');
}

//console.log(rootElement)


createRoot(rootElement).render(
 //Componente de verificacion para detectar errores o malas practicas
 <StrictMode>
    <App />
  </StrictMode>
);