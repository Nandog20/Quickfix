import { useState } from "react";
import axios from "axios";

import CustomInput from "../components/CustomInput";

function Citas(){
    const [nombre, setNombre] = useState("") 
    const [date, setDay] = useState("") 
    const [phone, setPhone] = useState() 
    const [email, setEmail] = useState("") 
    const [car, setCar] = useState("") 

    const addDate = (event)=>{
        event.defaultPrevented();
        alert(nombre + date + phone + email + car)
    }

    return(
        <div className="py-32 px-4 flex justify-center">
            <div className="  w-full max-w-lg flex flex-col shadow-md p-6 rounded-2xl bg-white">
            <h2 className="text-3xl font-bold text-center text-gray-700 m-3">Agendar cita</h2>
            <form onSubmit={addDate}>
                <CustomInput value={setNombre} placeholder="Manuel Juarez" nameValue="nombre" type="text" label="Nombre"/>
                <CustomInput value={setDay} placeholder="10/04/2025" nameValue="date" type="date" label="Fecha cita"/>
                <CustomInput value={setPhone} placeholder="5572648990" nameValue="phone" type="number" label="Numero celular"/>
                <CustomInput value={setEmail} placeholder="correo@gmail.com" nameValue="email" type="email" label="Correo electrónico"/>
                <CustomInput value={setCar} placeholder="Honda civic 2010" nameValue="car" type="text" label="Modelo de vehículo "/>
                <button  className='mt-3 border bg-cyan-500 text-white w-full rounded-lg py-2 shadow-lg  hover:bg-cyan-600 transition cursor-pointer '>Realizar cita</button>
            </form>
        </div>
        </div>
    )
}

export default Citas;