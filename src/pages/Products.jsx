import Axios from "axios"
import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard";

function Products(){

    const [productos, setProductos] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/products")
            .then((response) => {
                setProductos(response.data);
            }).catch((error) => console.error("Error al obtener productos:", error));
    }, []);

    return(
        <div className="pt-20">
            <div className="grid grid-cols-3 gap-4 p-4">
            {productos.map((producto) => (
                <ProductCard key={producto.id} producto={producto}/>
            ))}
        </div>
        </div>
    )
}

export default Products