import React, {useEffect, useContext} from "react"
import GuitarContext from "../../context/Guitar/GuitarContext"

export default function Guitars () {
// Estado global
const ctx = useContext(GuitarContext)
const { guitars, hola, changeText, getGuitars } = ctx
console.log(ctx)

    return (
        <>
        <p>{hola}</p>
        <button onClick={ () => {changeText()}}>Cambiar texto</button>
        <button onClick={ () => {getGuitars()}}>Listar guitarras</button>
        <div>
            <h2>Listado de Guitarras</h2>
            <ul>
                {
                    guitars.map((element)=> {
                        return(
                            <li key={element._id}>
                                <p>{element.nombre}</p>
                                <p>{element.precio}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        {/* este botón invoca changeText como una función, que se trae del ctx */}
        </>
    )
}
