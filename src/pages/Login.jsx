import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router";
import CustomInput from "../components/CustomInput";

function Login(){
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")

    const log =()=>{
        alert("hola " + user + " " + password)
    }

    return(
        <div className='py-32 px-4 flex justify-center'>
            <div className='w-full max-w-lg flex flex-col shadow-md p-6 rounded-2xl bg-white'>

            <h2 className='text-3xl font-bold text-center text-gray-700 m-3'>Inicia sesión</h2>

            <CustomInput nameValue='user' label="Correo Electrónico: " type='email' value={setUser} placeholder="usuario@email.com"/>
            
            <CustomInput nameValue='password' label="Contraseña: " type='password' value={setPassword} placeholder="*******"/>

            <p className='font-semibold text-sm my-3 text-gray-700 text-center'>¿No tienes cuenta? <Link to="/register" className='text-blue-500 underline'>Regístrate</Link></p>

            <button onClick={log} className='border bg-cyan-500 text-white w-full rounded-lg py-2 shadow-lg hover:bg-cyan-600 transition cursor-pointer'>Inicia sesión</button>
        </div>
        </div>
    )
}

export default Login