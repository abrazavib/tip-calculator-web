import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TipCalculatorApp } from './TipCalculatorApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TipCalculatorApp />
  </StrictMode>
);
