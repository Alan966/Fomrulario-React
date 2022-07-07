import { useForm } from "react-hook-form"
import "./App.sass"
const App = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    
    const submit = data =>{
        console.log(data)
    }

    return(
        <div className="ed-grid"  onSubmit={handleSubmit(submit)}>
            <form className="ed-container l-30" >
              <div className="ed-item form__item">
                     <label htmlFor="email">
                        Correo Electronico 
                        <input  
                        {...register("email", {required: "El correo es Obligatorio"})}
                        type="email" 
                        name="email" 
                        id="email" 
                        defaultValue=""
                        />
                    </label> 
                    { errors?.email && 
                    <span color="red">{ errors?.email?.message }</span>
                    }
                </div>
                <div className="ed-item form__item">
                    <label htmlFor="password">
                        Contraseña 
                        <input  
                        {...register("password", {
                            required: "La contraseña es Obligatoria", 
                            minLenght: 4, 
                            maxLength: 10
                            // validate: dato => 
                        })}
                        type="password" 
                        name="password" 
                        id="password"  
                        defaultValue=""
                        />
                    </label> 
                    { errors?.password && 
                    <span color="red">{ errors?.password?.message }</span>
                    }
                </div> 
                <div  className="ed-item form__item" >
                    <input type="submit" value="login" className="button full"/>
                </div>
            </form>
        </div>
    )
}

export default App