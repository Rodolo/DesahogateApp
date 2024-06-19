import { useContext } from "react";
import { Carta } from "../components/Carta";
import { AppContext } from "../context/appContext";
import { ContextProps } from "../interfaces/interfaces";
import { useBusquedaForm } from "../hooks/useBusquedaForm";

const initialFormState = {
  busqueda: '',
}

export const Cotillea = () => {

  const { publicaciones } : ContextProps = useContext(AppContext);
  const { busqueda, handleOnChange, handleOnSubmit } = useBusquedaForm(initialFormState);

  return (
  <div>
        <div>
          <form className="form-busqueda" onSubmit={handleOnSubmit} noValidate>
            <div className="flex-column">
              <label htmlFor="busqueda"> Quiero salseo sobre...</label>
              <input className="form-control busqueda" type="text" name="busqueda" value={busqueda} onChange={handleOnChange}/>
            </div>
          </form>
       
        </div>
        { 
            busqueda &&                        
                <>
                  {
                    publicaciones.map(row => row.destinatario.toUpperCase() === busqueda.toUpperCase() &&  <div className='carta-container' key={row.id}> <Carta key={row.id} id={row.id} destinatario={row.destinatario} mensaje={row.mensaje}/> </div>)
                  }                            
                </>
        }
  </div>

  )
}
