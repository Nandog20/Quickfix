import { useState } from "react";
import Axios from "axios";


function Login(){
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")

    const log =()=>{
        alert("hola " + user + " " + password)
    }

    return(
        <div>
            <label htmlFor="user">Correo Electrónico:</label>
            <input type="email" name="user" onChange={(event)=>{setUser(event.target.value)}}/>

            <label htmlFor="password">Correo Electrónico:</label>
            <input type="password" name="password" onChange={(event)=>{setPassword(event.target.value)}}/>

            <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>

            <button onClick={log}>Inicia sesión</button>
        </div>
    )
}

export default Login