import "./App.sass"
import Form from "./components/Form"
import Field from "./components/Field";
import Submit from "./components/Submit"; 
// import useForm from "./hooks/UseForm";
import TextAre from "./components/TextAre"; 
import Selecet from "./components/Select"; 
import { useEffect, useRef, useState } from "react";
const ComponentClassTwo = () => {

// const [data, setData] = useState({ email: "", password: ""})
// const data = ({ email: "", password: ""})

// const [data, loginForm, submit ] = useForm(({ email: "", password: ""}))

// const loginForm = useRef()

// const changeData = e => {
//     setData({
//         ...data, 
//         [e.target.name]: e.target.value
//     })
// } 

const form = useRef()  
    const [user, setUser] = useState({})

useEffect(() => {
    fetch('http://localhost:3050/leads/2')
    .then(resp => resp.json())
    .then(data => setUser(data))
},[])

const submit = e => {
    e.preventDefault()

    const f = form.current 

    const data = {
        fullname:f.fullname.value, 
        mail: f.mail.value, 
        age: f.age.value,
        obs: f.obs.value, 
        country: f.obs.value, 
        active: f.active.checked
    }

    fetch('http://localhost:3050/leads/2', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(re => {
        console.log(re)
        f.reset()
        alert("Los datos fueron guardados :)")
    })
    .catch(err => console.error(err))
}

    return (
        // <Form  accion={submit} referencia={loginForm}> 
        <Form  accion={submit} formRef={form}>
             <Field 
                label={'Nombres'}  
                type={'text'} 
                // value={data.email}  
                value={user.fullname}
                name="fullname"
            />
            <Field 
                label={'Correo Electronico'}  
                type={'email'} 
                // value={data.email} 
                value={user.mail}
                name="mail"
            /> 
             <Field 
                label={'Edad'}  
                type={'number'} 
                // value={data.email}
                value={user.age}
                name="age"
            />
            <TextAre 
            name="obs"
            // value={data.obs}
            value={user.obs}
            label={'Observaciones'}
            />  
            <Selecet 
            value={user.country}
            label="Pais"
            name="country"
            options={
                [
                    {
                        v:"pe", 
                        content:"Peru"
                    }, 
                    {
                        v:"co", 
                        content:"Colombia"
                    }, 
                    {
                        v:"bo", 
                        content:"Bolivia"
                    }
                ]
            }
            /> 
            <Field 
                label={'¿Activo?'}  
                type={'checkbox'} 
                checked={user.active}
                name="active"
            />
            <Submit 
            valor="Guardar"
            />
        </Form>
    )
}

export default ComponentClassTwo 

// Librerias para fomularios
// FORMIK docs
// React Boostrap 
// yup 
// tailwindcss