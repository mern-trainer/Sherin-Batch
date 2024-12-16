import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { MyProvider } from './Providers/MyProvider';
import { CartProvider } from './Providers/CartProvider';
import { AuthProvider } from './Providers/AuthProvider';
import { TodoProvider } from './Providers/TodoProvider';

import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = createRoot(document.getElementById("root"))

root.render(<Provider store={store}>
    <MyProvider>
        <CartProvider>
            <AuthProvider>
                <TodoProvider>
                    <App />
                </TodoProvider>
            </AuthProvider>
        </CartProvider>
    </MyProvider>
</Provider>)