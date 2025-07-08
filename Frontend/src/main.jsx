import ReactDOM from 'react-dom/client'
import App from './App'
import ShopProvider from './Context/ShopContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
     <ShopProvider>
        <App />
     </ShopProvider>
)
