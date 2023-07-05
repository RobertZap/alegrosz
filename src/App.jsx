import Products from "./components/Products.jsx";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <Link to="add-product">Add product</Link>
            <Products />
        </>
    );
}

export default App;
