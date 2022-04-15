import "./App.sass"
import { useRef } from 'react';
import Field from "./components/Field";

const App = () => {

// const [data, setData] = useState({ email: "", password: ""})
const data = ({ email: "", password: ""})

const loginForm = useRef()

// const changeData = e => {
//     setData({
//         ...data, 
//         [e.target.name]: e.target.value
//     })
// } 
const submit = e => {
    e.preventDefault()
    // console.log(data)
    console.log(loginForm.current)
}

    return (
        <div className="ed-grid">
            <form className="ed-container l-30" onSubmit={submit} ref={loginForm}>
                <Field 
                label={'Correo Electronico'}  
                type={'email'} 
                value={data.email}
                />
                <Field 
                label={'Contraseña'}  
                type={'password'} 
                value={data.password}
                />
                {/*<div className="ed-item form__item">
                     <label htmlFor="email">
                        Correo Electronico 
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        defaultValue={data.email} 
                        // onChange={changeData}/>
                        />
                    </label>
                </div> */}
                {/* <div className="ed-item form__item">
                    <label htmlFor="password">
                        Contraseña 
                        <input 
                        type="password" 
                        name="password" 
                        id="password"  
                        defaultValue={data.password}
                        // onChange={changeData}/>
                        />
                    </label>
                </div> */}
            </form>
        </div>
    )
}

export default App