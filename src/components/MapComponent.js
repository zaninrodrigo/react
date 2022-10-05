import { useState } from "react";


const MapComponent = () => {
    
   /*  const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 0, name: 'Pizza'})
        }, 1000)
    })

    console.log(task)

    task
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.warn(error)
        })
        .finally(() => {
            console.log('Promesa finalizada')
        }) */
        const [product, setProduct] =useState ([])

        setTimeout(() => {
            setProduct([
                {id: 1, name: 'pizza', description:'string', stock: 'number'},
                {id: 2, name: 'hamburguesa', description:'string', stock: 'number'},
                {id: 3, name: 'empanada', description:'string', stock: 'number'}
            ])
        }, 3000)

        /* const prom = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(product);
            },3000)
        })

        prom.then((result) => {console.log(result)}) */

        return(
            <>
              <h1>Este es mi componente</h1>
                <ul>
                    {product.map((product) => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                </ul>  
            </>
        )
}

export default MapComponent;