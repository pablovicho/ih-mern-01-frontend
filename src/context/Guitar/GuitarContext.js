//inicializar el context, empieza con null, pero con nuevos valores ese null va a cambiar a un objeto
import { createContext } from "react";

const  GuitarContext = createContext(null) //a través de context, podemos manejar componentes y datos globales

export default GuitarContext