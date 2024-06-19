
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AppContext } from "../context/appContext"
import { ContextProps, DataProps } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";



export const useForm = ( initialFormState: DataProps ) => {

    const [ formState, setFormState ] = useState(initialFormState);
    const [ formEnviado , setFormEnviado ] = useState(false);
    const { publicaciones, setPublicaciones } : ContextProps = useContext(AppContext);
   
    const navigate = useNavigate();

    const handleOnSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const destinatario = e.currentTarget.elements['destinatario'].value;
        const mensaje = e.currentTarget.elements['mensaje'].value;

        setFormEnviado(true);
        if( destinatario !== '' && mensaje != ''){
            const newData =  {
                id: (publicaciones && publicaciones?.length + 1),
                destinatario,
                mensaje
               }
            setPublicaciones(  (prevState: DataProps[]) =>{ 
                sessionStorage.setItem('publicaciones', JSON.stringify([...prevState, newData]));
                return [...prevState, newData]
            });
          
            navigate('/inicio');
        }
    }


    const handleOnChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }
    
    return {
        ...formState,
        formEnviado,
        handleOnChange,
        handleOnSubmit
    }
}
