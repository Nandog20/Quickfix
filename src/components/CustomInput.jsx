
function CustomInput({value, placeholder, nameValue, type='text', label}){
    return(
        <>
            <label htmlFor={nameValue} className='font-semibold text-lg my-2 text-gray-700'>{label}</label>
            <input type={type} name={nameValue} onChange={(e) => value(e.target.value)} placeholder={placeholder} className='border-slate-200 p-2 rounded-lg bg-slate-100 w-full' required/>
        </>
    )
}

export default CustomInput