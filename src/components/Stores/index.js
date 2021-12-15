import React, {useEffect, useContext} from "react";
import StoreContext from "../../context/Store/StoreContext";

export default function Stores() {
  // Estado global
  const ctx = useContext(StoreContext);
  const { stores, hola, changeText, getStores } = ctx;
  console.log(ctx);

  return (
    <>
      
      <p>{hola}</p>
      <button onClick={() => {changeText()}}>Cambiar texto</button>
      <button onClick={ () => {getStores()}}>Listar tiendas</button>
      
      <div>
      <h2>Listado de tiendas</h2>
        <ul>
          {stores.map((element) => {
            return (
              <li key={element._id}>
                <em>{element.nombre}</em>
                <p>{element.domicilio}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
