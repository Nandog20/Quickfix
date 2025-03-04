import Axios from "axios";

function NewProduct(){
    return(
        <div className='py-32 px-4 flex justify-center'>
            <div className='w-full max-w-lg flex flex-col shadow-md p-6 rounded-2xl bg-white'>
                <h2 className='text-3xl font-bold text-center text-gray-700 m-3'>Ingresa un nuevo producto</h2>

                <label htmlFor="nombre" className='font-semibold text-lg my-2 text-gray-700'>Nombre de producto:</label>
                <input type="text" name="nombre" placeholder="Producto 1" className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full'/>

                <label htmlFor="stock" className='font-semibold text-lg my-2 text-gray-700'>Número de stock:</label>
                <input type="number" name="stock" placeholder="50" className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full'/>

                <label htmlFor="precio" className='font-semibold text-lg my-2 text-gray-700'>Número de stock:</label>
                <input type="number" name="precio" placeholder="25.50" className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full'/>

                <label htmlFor="imagen" className='font-semibold text-lg my-2 text-gray-700'>URL imagen:</label>
                <input type="text" name="imagen" placeholder="../images/imagen.jpg" className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full'/>

                <label htmlFor="descripción" className='font-semibold text-lg my-2 text-gray-700'>Descripción del producto:</label>
                <input type="text" name="descripción" placeholder="Ingrese la descripción del producto" className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full'/>

                <button className=' my-4 border bg-cyan-500 text-white w-full rounded-lg py-2 shadow-lg hover:bg-cyan-600 transition cursor-pointer'>Añadir producto</button>
            </div>
        </div>
    )
}

export default NewProduct