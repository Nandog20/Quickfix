import Axios from "axios"
import { useState, useEffect } from "react"

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
                <div id={producto.id} className="border p-4 rounded-lg shadow-md">
                    <img 
                        src={`http://localhost:5173/src/images/${producto.img}`} 
                        alt={producto.nombre} 
                        className="w-full h-[400px] object-cover mb-2 rounded-lg" 
                    />
                    <h2 className="text-lg font-semibold">{producto.nombre}</h2>
                    <p className="text-gray-600">${producto.precio}</p>
                    <p className="text-gray-600">piezas: {producto.stock}</p>
                    <p className="text-gray-600">{producto.descripción}</p>
                    <button>Comprar</button>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Products