import React, {useState} from "react";
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';
import products from '../../utils/products/products.json';


const ItemListContainer = (props) => {
    const[productList, setProductList] = useState([])
    
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
    myPromise.then((res) => setProductList(res))
    


    return (
        <div className="ItemListContainer">
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            <ItemList items={productList}/>
            <ItemCount stock={5} initial={0}/>
        </div>
    )
}

export default ItemListContainer;