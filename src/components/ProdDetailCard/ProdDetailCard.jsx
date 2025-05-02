import React from 'react'
import "./ProdDetailCard.css";
import BotonesDetail from '../BotonesDetail/BotonesDetail';


    const ProdDetailCard2 = ({id, titulo, descripcion, img, descuento, stock, categoria, precioAntes, precioFinal}) => {

    return (
        <>
            <main>
                <article>
                    <section className="section product" aria-label="product">
                        <div className="container">
                            <div className="img-container">
                                <img
                                    src={img}
                                    alt={id}/>
                            </div>
                            <div className="product-content">
                                <p class="product-subtitle">{categoria}</p>
                                <h1 className="h1 product-title">
                                    {titulo}
                                </h1>
                                <p className="product-text">
                                    DESCRIPCION: {descripcion}
                                    <br/>
                                    Stock: {stock}
                                </p>
                                <div className="wrapper">
                                    <span className="price" data-total-price="">${precioFinal}</span>
                                    <span className="badge">{descuento}%</span>
                                    <del className="del">${precioAntes}</del>
                                </div>
                            
                                <BotonesDetail/>
                            
                            </div>
                        </div>
                    </section>
                </article>
            </main>
    </>
);
}


export default ProdDetailCard2