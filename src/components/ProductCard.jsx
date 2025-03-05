
function ProductCard({producto}){
    return(
        <div id={producto.id} className="  rounded-lg shadow-md">
                    <img 
                        src={`http://localhost:5173/src/images/${producto.img}`} 
                        alt={producto.nombre} 
                        className="w-full h-[300px] object-cover mb-2 rounded-t-lg" 
                    />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold">{producto.nombre}</h2>
                    <p className="text-gray-600">${producto.precio}</p>
                    <p className="text-gray-600">piezas: {producto.stock}</p>
                    <p className="text-gray-600">{producto.descripción}</p>
                    <button className='border bg-cyan-500 text-white w-[100px] mt-2 rounded-lg py-2 shadow-lg hover:bg-cyan-600 transition cursor-pointer'>Comprar</button>
                    </div>
                </div>
    )
}

export default ProductCard