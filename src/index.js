import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { MyProvider } from './Providers/MyProvider';

const root = createRoot(document.getElementById("root"))

root.render(<MyProvider>
    <App />
</MyProvider>)