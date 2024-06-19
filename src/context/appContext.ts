import { createContext } from "react";
import { ContextProps } from "../interfaces/interfaces";

export const AppContext = createContext<ContextProps>(
    {publicaciones: [], setPublicaciones: () => {}}
);