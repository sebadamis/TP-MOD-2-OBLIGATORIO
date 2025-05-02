import React from 'react'
import "./Productos.css"
import BotonComprar from '../BotonCompra/BotonCompra'
import { NavLink } from 'react-router'

export const Productos2 = ({id, titulo, img, precioAntes, precioFinal}) => {
    return (
    <>
        <body className='body-card'>
            <div className="card">
                <div className="imgBox">
                    <img
                    src={img}
                    alt={id}
                    className="mouse"
                    />
                </div>
                <div className="contentBox">
                    <h3>{titulo}</h3>
                    <h2 className="price">
                    {precioFinal}<small>  {precioAntes}</small> $
                    </h2>
                    <div className="botones-card">
                        <button className="button"><BotonComprar type="button" >COMPRAR</BotonComprar></button>
                        <button className="button"><NavLink to={`/products/${id}`}>Ver detalle</NavLink></button>
                    </div>
                </div>
            </div>
        </body>
    </>

    )
}

export default Productos2