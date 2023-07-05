import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        getProduct(productId, controller.signal).then((data) =>
            setProduct(data)
        );

        return () => {
            controller.abort();
        };
    }, [productId]);

    function getProduct(id, signal) {
        return fetch(`http://localhost:3000/products/${id}`, { signal }).then(
            (response) => response.json()
        );
    }

    async function deleteProduct(id) {
        return await fetch(`http://localhost:3000/products/${id}`, {
            method: "delete",
        });
    }

    async function handleDelete() {
        await deleteProduct(productId);
        navigate("/");
    }

    if (!product) {
        return <h2>Loader...</h2>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price ${product.price}</p>
            <br />
            <button onClick={handleDelete}>Delete Product</button>
            <Link
                style={{
                    padding: 10,
                    margin: 10,
                    display: "inline-block",
                    textDecoration: "none",
                }}
                to={`/edit-product/${product.id}`}
            >
                Edit {product.name}
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                }}
                to="/"
            >
                Back
            </Link>
        </div>
    );
}

export default Product;
