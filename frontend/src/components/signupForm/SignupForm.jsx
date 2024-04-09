import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import InputValidation from "../shared/InputValidation"
import { useTranslation } from "react-i18next"

export default function SignupForm(){
  const {t} = useTranslation()
  const [datos, setDatos] = useState({email: "", password:"", name: ""})
  const navigate = useNavigate()

  function onSignup(){
    axios.post("http://localhost:3000/api/users/signup", datos)
    .then((response)=>{
      navigate("/login")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return(
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              {t('registro')}
            </div>
            <div className="card-body">
              <div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">{t('email')}</label>
                  <InputValidation rules={[{text: 'el formato de email es valido', fn: (p)=>p.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) !==null}]} type={"email"} value={datos.email} onChange={(e)=> setDatos({...datos, email: e.target.value})}></InputValidation>
                  {/* <input value={datos.email} onChange={(e)=> setDatos({...datos, email: e.target.value})} type="email" className="form-control" id="email" name="email" required/> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">{t('contraseña')}</label>
                  <InputValidation rules={[{text: 'longitud menor que 8', fn: (p)=>p.length>=8}, {text: 'no contiene caracteres especiales', fn: (p)=>p.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/) !==null}]} type={"password"} value={datos.password} onChange={(e)=> setDatos({...datos, password: e.target.value})}></InputValidation>
                  {/* {datos.password.length < 8? <p>{t('la contraseña debe tener mas de 8 caracteres')}</p>:""}
                  {datos.password.includes("@", "(", ")", "-", "_", "!", "¡", "¿", "?")? '': <p>{t('la contraseña debe incluir caracteres especiales [@ ( ) - _ ! ¡ ¿ ?]')}</p>} */}
                </div>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">{t('nombre')}</label>
                  <input  value={datos.name} onChange={(e)=> setDatos({...datos, name: e.target.value})} type="text" className="form-control" id="nombre" name="nombre" required/>
                </div>
                <button onClick={onSignup} type="submit" className="btn btn-primary">{t('registrarse')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}