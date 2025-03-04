import { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from "react-router";

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

            }).then(()=>{alert("Usuario registrado"); 
                //Para evitar recargas y redirigir al usuario a otra pagina 
                event.preventDefault;
                Navigate("/products")
            })
        }else{
            alert("Las contraseñas deben coincidir")
        }
    }

    return(
    <div className='py-32 px-4 flex justify-center'>

        <div className='w-full max-w-lg flex flex-col shadow-md p-6 rounded-2xl bg-white'>
        
        <h2 className='text-3xl font-bold text-center text-gray-700 m-3'>Regístrate</h2>

        <label htmlFor='name' className='font-semibold text-lg my-2 text-gray-700'>Nombre:</label>
        <input type='text' name='name' onChange={(e) => setName(e.target.value)} placeholder='Nombre' className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full' />

        <label htmlFor='apellidoP' className='font-semibold text-lg my-2 text-gray-700'>Apellido Paterno:</label>
        <input type='text' name='apellidoP' onChange={(e) => setApellidoP(e.target.value)} placeholder='Primer Apellido' className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full' />

        <label htmlFor='apellidoM' className='font-semibold text-lg my-2 text-gray-700'>Apellido Materno:</label>
        <input type='text' name='apellidoM' onChange={(e) => setApellidoM(e.target.value)} placeholder='Segundo Apellido' className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full' />

        <label htmlFor='email' className='font-semibold text-lg my-2 text-gray-700'>Correo electrónico:</label>
        <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='correo@email.com' className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full' />

        <label htmlFor='password' className='font-semibold text-lg my-2 text-gray-700'>Contraseña:</label>
        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} placeholder='********' className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full' />

        <label htmlFor='rePassword' className='font-semibold text-lg my-2 text-gray-700'>Confirma tu contraseña:</label>
        <input type='password' name='rePassword' onChange={(e) => setRepassword(e.target.value)} placeholder='********' className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full' />

        <p className='font-semibold text-sm my-3 text-gray-700 text-center'>¿Ya tienes cuenta? <Link to='/login' className='text-blue-500 underline'>Inicia sesión</Link></p>

        <button onClick={Add} className='border bg-cyan-500 text-white w-full rounded-lg py-2 shadow-lg hover:bg-cyan-600 transition cursor-pointer'>Registrarse</button>
        </div>

    </div>
    )
}

export default Register