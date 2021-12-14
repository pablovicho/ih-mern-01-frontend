// ESTADO GLOBAL (O STORE). TODO LO QUE TENGA QUE VER CON GUITARRAS ESTARÁ GUARDADO AQUÍ

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO ARQUITECTURA DE FLUX

//

import { useReducer } from "react"; //es como useState
import GuitarContext from "./GuitarContext";
import GuitarReducer from "./GuitarReducer";

const GuitarState = (props) => {
  // 1. Estado inicial
  const initialState = {
    guitars: [],
    hola: "mundo",
  };
  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(GuitarReducer, initialState); //GuitarReducer son todas las funciones que van a alterar el estado inicial
  //dipatch es una fución que cambia el estado global, le da los datos reales al reducer para que haga su propia función

  // 3. Funciones de cambio en estado global
  const changeText = () => {
    dispatch({
      type: "CHANGE_TEXT",
      payload: "estoy aprendiendo Context sin morir en el intento", //datos reales que le vas a pasar para cambiar el estado global
    });
  };
  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <GuitarContext.Provider
      value={{
        //las llaves para llamar js; llama un objeto, con el valor de guitarras y el saludo
        guitars: globalState.guitars,
        hola: globalState.hola,
        changeText,
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </GuitarContext.Provider>
  );
};

export default GuitarState;
