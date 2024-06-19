
export interface ContextProps {
  publicaciones:  DataProps[], 
  setPublicaciones: React.Dispatch<React.SetStateAction<DataProps[]>>
}

export interface DataProps {
    id: number,
    destinatario: string
    mensaje: string
}


export interface BusquedaProps {
  busqueda: string
}