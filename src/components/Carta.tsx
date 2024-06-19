import { DataProps } from "../interfaces/interfaces"

export const Carta =  ({ destinatario, mensaje } : DataProps) => {
  return (
    <div className='carta'>
      <span> Querid@ {destinatario}: </span>
      <p> {mensaje} </p>
    </div>
  )
}
