import React, {useEffect, useContext} from "react"
import StoreContext from "../../context/Store/StoreContext"

export default function Stores () {
// Estado global
const ctx = useContext(StoreContext)
const { stores, hola, changeText } = ctx
console.log(ctx)

    return (
        <>
            Listado de tiendas
        <p>{ctx.hola}</p>
        <button onClick={ () => {changeText()}}>Cambiar texto</button>
        </>
    )
}
