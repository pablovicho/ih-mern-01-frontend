import { useReducer } from "react"; //es como useState
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer"
import axiosClient from "../../config/axios";

const StoreState = (props) => {
// 1. Estado inicial
const initialState = {
    stores:[],
    hola: "mundo"
}
// 2. Configuración de reducer y creación del estado global
const  [globalState, dispatch] = useReducer(StoreReducer, initialState) //GuitarReducer son todas las funciones que van a alterar el estado inicial 
// 3. Funciones de cambio en estado global
const changeText = () => {
    dispatch({
      type: "CHANGE_TEXT",
      payload: "¿neta pudimos cambiar esto?", //datos reales que le vas a pasar para cambiar el estado global
    });
  };

  const getStores = async() => {
    const res = await axiosClient.get("stores/readall")
    const list = res.data.data
    console.log(list)
    dispatch({
      type: "GET_STORES",
      payload: list, //datos reales que le vas a pasar para cambiar el estado global
    });
  }

// 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
return (
    <StoreContext.Provider
    value={{ //las llaves para llamar js; llama un objeto, con el valor de stores y el saludo
stores: globalState.stores,
hola: globalState.hola,
changeText,
getStores
    }}
    >
{props.children} {/*todos los children tendrán acceso a value*/}
    </StoreContext.Provider>
)
}

export default StoreState
