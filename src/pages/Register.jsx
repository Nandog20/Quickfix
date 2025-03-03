import { useState } from 'react'
import Axios from 'axios'


function Register() {
    const [name,setName] = useState("")
    const [apellidoP,setApellidoP] = useState("")
    const [apellidoM,setApellidoM] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [rePassword,setRepassword] = useState("")

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
        <div className='pt-20'>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" onChange={(event)=> {setName(event.target.value)}}/>

            <label htmlFor="apellidoP">Apellido Paterno:</label>
            <input type="text" name="apellidoP" onChange={(event) => {setApellidoP(event.target.value)}}/>

            <label htmlFor="apellidoM">Apellido Materno:</label>
            <input type="text" name="apellidoM" onChange={(event) => {setApellidoM(event.target.value)}}/>

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="email" onChange={(event) => {setEmail(event.target.value)}}/>

            <label htmlFor="password">Contraseña:</label>
            <input type="text" name="password" onChange={(event) => {setPassword(event.target.value)}}/>

            <label htmlFor="rePassword">Confirma tu contraseña:</label>
            <input type="text" name="rePassword" onChange={(event) => {setRepassword(event.target.value)}}/>

            <button onClick={Add}>Registrase</button>
            <a href="/">Regresa al inicio</a>
        </div>
    )
}

export default Register