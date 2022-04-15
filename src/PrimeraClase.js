// onSubmit 
// onChange 
// OnClick 
import { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0);
  const [mail, setMail] = useState("");
  // const email = useRef();
 
// const submit = e => {
//   e.preventDefault(); 
//   alert("Formulario enviado")
//   console.log(e.target)
// }

const calculateLong = e => {
  setNum(e.target.value.length)
}

// const submit = e => {
//   e.preventDefault(); 
//   console.log(email.current.value)
// }

const changeEmail = e => setMail(e.target.value)

  return (
    <div>
      {/* <form onSubmit={submit}> */}
      <form>
        <input 
        type="email" 
        value={mail}
        // ref={email}
        onChange={changeEmail}
        />
        <input 
        type="password" 
        placeholder="Contraseña" 
        onChange={calculateLong} 
        required 
        />

{/* Primera Parte */}
        {/* <label htmlFor="remember">Recuerdame</label>
        <input type="checkbox" name="remember" id="remember" defaultChecked/>
        <textarea name="about" id="about" cols="30" rows="10" defaultValue="Hola" />
        <select name="country" id="country" defaultValue="peru" required>
          <option value="">-Seleccionar-</option>
          <option value="bo">Bolivia</option>
          <option value="col">Colombia</option>
          <option value="peru">Peru</option>
        </select> */}

        {/* Segunda Parte */}
        <p>Usted ingreso {num} carcateres</p>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default App;
