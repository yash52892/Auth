import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TokenProvider from './store/TokenProvider';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TokenProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </TokenProvider>
);
