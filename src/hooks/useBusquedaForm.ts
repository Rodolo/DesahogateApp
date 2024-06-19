
import { ChangeEvent, FormEvent, useState } from "react";
import { BusquedaProps} from "../interfaces/interfaces";


export const useBusquedaForm = ( initialFormState: BusquedaProps ) => {

    const [ formState, setFormState ] = useState(initialFormState);

    const handleOnChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    const handleOnSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return {
        ...formState,
        handleOnChange,
        handleOnSubmit
    }
}
