import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
            <Typography variant="h2" component="h1">
                {product.name}
            </Typography>
            <p>{product.description}</p>
            <p>Price ${product.price}</p>
            <br />
            <Button
                onClick={handleDelete}
                sx={{ marginRight: 3 }}
                variant="contained"
            >
                Delete Product
            </Button>

            <Button sx={{ marginRight: 3 }} variant="contained">
                <Link to={`/edit-product/${product.id}`}>
                    Edit {product.name}
                </Link>
            </Button>

            <Button sx={{ marginRight: 3 }} variant="contained">
                <Link
                    style={{
                        textDecoration: "none",
                    }}
                    to="/"
                >
                    Back
                </Link>
            </Button>
        </div>
    );
}

export default Product;
