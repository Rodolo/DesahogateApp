import { AppContext } from "./context/appContext"
import { Navigation } from "./routes/Navigation"
import data from './data/data.json'
import { useState } from "react"
import { DataProps } from "./interfaces/interfaces";


function App() {
  const publicacionesFromSession = sessionStorage.getItem('publicaciones');
  let p = data;
  if(publicacionesFromSession){
    p = JSON.parse(publicacionesFromSession);
  } 
  const [publicaciones, setPublicaciones] = useState<DataProps[]>(p);

  const providerValue = {
    publicaciones, 
    setPublicaciones
  }

  return (
    <>
      <AppContext.Provider value={providerValue}>
        <Navigation/>
      </AppContext.Provider>
    </>
  )
}

export default App
