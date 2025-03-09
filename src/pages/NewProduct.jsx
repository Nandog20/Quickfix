import Axios from "axios";
import { useState } from "react";
import CustomInput from "../components/CustomInput";

function NewProduct(){
    const [producto, setProducto]= useState("");
    const [stock, setStock]= useState();
    const [precio, setPrecio]= useState();
    const [image, setImage]= useState("");
    const [desc, setDesc]= useState("");

    const Add=()=>{
        Axios.post("http://localhost:3001/NewProduct",{
            producto: producto,
            stock: stock,
            precio: precio,
            image: image,
            desc: desc
        }).then(()=>alert("Producto agregado"))
    }

    return(
        <div className='py-32 px-4 flex justify-center'>
            <div className='w-full max-w-lg flex flex-col shadow-md p-6 rounded-2xl bg-white'>
                <h2 className='text-3xl font-bold text-center text-gray-700 m-3'>Ingresa un nuevo producto</h2>

                <CustomInput nameValue='nombre' label="Nombre del producto: " type='text' value={setProducto} placeholder="producto"/>

                <CustomInput nameValue='stock' label="Numero de stock: " type='text' value={setStock} placeholder="4"/>

                <CustomInput nameValue='precio' label="Precio unitario: " type='number' value={setPrecio} placeholder="25.90"/>

                <CustomInput nameValue='imagen' label="URL de la imagen: " type='text' value={setImage} placeholder="imagen.jpg"/>
                
                <CustomInput nameValue='descripción' label="Descripción del producto: " type='text' value={setDesc} placeholder="Producto para tal cosa"/>

                <button onClick={Add} className=' my-4 border bg-cyan-500 text-white w-full rounded-lg py-2 shadow-lg hover:bg-cyan-600 transition cursor-pointer' >Añadir producto</button>
            </div>
        </div>
    )
}

export default NewProduct