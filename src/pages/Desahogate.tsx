import { useForm } from "../hooks/useForm";


const initialFormState = {
  id: 0,
  destinatario: '',
  mensaje: ''
}

export const Desahogate = () => {

  const { destinatario, mensaje, formEnviado, handleOnChange, handleOnSubmit } = useForm(initialFormState);
  
  return (
    <div className="form-container">
      <form className="form form-publicaciones" onSubmit={handleOnSubmit} noValidate>
          <div className="flex-column">
              <label>Para:</label>
              <input className="form-control destinatario" onChange={handleOnChange} type="text" name="destinatario" value={destinatario}/>
              {(formEnviado && destinatario.length == 0) && <span className="error"> El campo es obligatoriooo </span>}
          </div>
          <div className="flex-column">
              <label>Que quieres decirle?</label>
              <textarea className="form-control mensaje" onChange={handleOnChange} name="mensaje" value={mensaje}/>
              {(formEnviado && mensaje.length == 0) && <span className="error"> El campo es obligatoriooo </span>}
          </div>
          <div className="btn-container">
            <button type="submit">Un Besito</button>
          </div>        
      </form>
    </div>

   
  )
}
