
import { Carta } from '../components/Carta'
import { ContextProps } from '../interfaces/interfaces';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';

export const Inicio = () => {

  const { publicaciones } : ContextProps = useContext(AppContext);

  return (
    <div className='carta-container'>
        <h3 className='text-align-center'> Ultimas publicaciones: </h3>
        {
          publicaciones.map(row => <Carta key={row.id} id={row.id} destinatario={row.destinatario} mensaje={row.mensaje}/>)
        }

    </div>
  )
}
