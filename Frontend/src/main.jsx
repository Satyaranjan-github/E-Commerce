import ReactDOM from 'react-dom/client';
import App from './App';
import ShopProvider from './Context/ShopContext';
import './index.css';

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
   <ShopProvider>
      <App />
   </ShopProvider>
)
