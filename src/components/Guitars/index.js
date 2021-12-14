import React, {useEffect, useContext} from "react"
import GuitarContext from "../../context/Guitar/GuitarContext"

export default function Guitars () {
// Estado global
const ctx = useContext(GuitarContext)
const { guitars, hola, changeText } = ctx
console.log(ctx)

    return (
        <>
            Listado de guitarras
        <p>{hola}</p>
        <button onClick={ () => {changeText()}}>Cambiar texto</button>
        {/* este botón invoca changeText como una función, que se trae del ctx */}
        </>
    )
}
