import { Link } from "react-router-dom";
import products from "./Products.json";

function Products() {
    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id} style={{display:"block"}} >
                    <img src={product.images[0]} width="200px" alt="product" />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <small>{product.price} lei</small>
                </Link>
            ))}
        </div>
    );
}

export default Products;
