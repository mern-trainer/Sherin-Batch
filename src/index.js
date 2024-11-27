import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { MyProvider } from './Providers/MyProvider';
import { CartProvider } from './Providers/CartProvider';

const root = createRoot(document.getElementById("root"))

root.render(<MyProvider>
    <CartProvider>
        <App />
    </CartProvider>
</MyProvider>)