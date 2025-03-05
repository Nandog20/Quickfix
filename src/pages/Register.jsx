import { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from "react-router";
import CustomInput from '../components/CustomInput';

function Register() {
    const [name,setName] = useState("")
    const [apellidoP,setApellidoP] = useState("")
    const [apellidoM,setApellidoM] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [rePassword,setRepassword] = useState("")

    const Navigate = useNavigate

    const Add = ()=>{
        if(password === rePassword){
            Axios.post("http://localhost:3001/register",{
                nombre: name,
                paterno: apellidoP,
                materno: apellidoM,
                email: email,
                password: password

            }).then(()=>{alert("Usuario registrado")})
        }else{
            alert("Las contraseñas deben coincidir")
        }
    }

    return(
    <div className='py-32 px-4 flex justify-center'>

        <div className='w-full max-w-lg flex flex-col shadow-md p-6 rounded-2xl bg-white'>
        
        <h2 className='text-3xl font-bold text-center text-gray-700 m-3'>Regístrate</h2>

        <CustomInput nameValue='name' label="Nombre:" type='text' value={setName} placeholder="Nombre"/>

        <CustomInput nameValue='apellidoP' label="Apellido Paterno:" type='text' value={setApellidoP} placeholder="Primer Apellido"/>

        <CustomInput nameValue='apellidoM' label="Apellido Materno:" type='text' value={setApellidoM} placeholder="Segundo Apellido"/>

        <CustomInput nameValue='email' label="Correo electrónico:" type='email' value={setEmail} placeholder="correo@email.com"/>

        <CustomInput nameValue='password' label="Contraseña:" type='password' value={setPassword} placeholder="*******"/>

        <CustomInput nameValue='rePassword' label="Confirma tu contraseña:" type='password' value={setRepassword} placeholder="*******"/>

        <p className='font-semibold text-sm my-3 text-gray-700 text-center'>¿Ya tienes cuenta? <Link to='/login' className='text-blue-500 underline'>Inicia sesión</Link></p>

        <button onClick={Add} className='border bg-cyan-500 text-white w-full rounded-lg py-2 shadow-lg hover:bg-cyan-600 transition cursor-pointer'>Registrarse</button>
        </div>

    </div>
    )
}

export default Register