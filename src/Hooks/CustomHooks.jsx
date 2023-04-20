
import { useState } from 'react';

const CustomHook = (intVal,initError) => {
    const [inps, setInps] = useState(intVal);
    const [errors, setErrors] = useState(initError);
    const inputHandleChange = (e) => {
        // console.log("called inputHandleChange Hook",e);
        // console.log("called inputHandleChange Hook",e.target.name);
        // console.log("called inputHandleChange Hook",e.target.value);
        setInps((inps)=>({...inps,[e.target.name]:e.target.value}))
        if (e.target.name === "username") {
            if (e.target.value === "") {
                setErrors((errors)=>({...errors,"usernameError":"User Name is required"}))
            } else {
                setErrors((errors)=>({...errors,"usernameError":""}))
            }  
        } 
        if (e.target.name === "password") {
            if (e.target.value === "") {
                setErrors((errors)=>({...errors,"passwordError":"User Name is required"}))
            } else {
                setErrors((errors)=>({...errors,"passwordError":""}))
            }  
        } 
    }
    return{inps,errors,inputHandleChange}
};

export default CustomHook;