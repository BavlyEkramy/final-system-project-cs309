import productsData from"../product data/productData"
import React from "react"

function productList(){
    console.log(productsData )

    const products = productsData.map((product) => {
        return(
            <div className="product-info" key={product.model}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        )
    })
}
export default productList