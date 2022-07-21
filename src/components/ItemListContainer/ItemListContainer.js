import React, {useEffect, useState} from "react";
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import customFetch from "../../utils/customFetch";
import { useParams } from 'react-router';
const { products } = require('../../utils/products/products');


const ItemListContainer = () => {
    const[dato, setDato] = useState([])
    const { id } = useParams();
    

    useEffect(() => {
        if (id === undefined) {
            customFetch(2000, products)
                .then(resolve => setDato(resolve))
                .catch(reject => console.log(reject))
        } else {
            customFetch(2000, products.filter(item => item.categoryId === parseInt(id)))
            .then(resolve => setDato(resolve))
            .catch(reject => console.log(reject))
        }
    }, [id]);    


    return (
        <div className="ItemListContainer">
            <ItemList items={dato}/>
        </div>
    )
}

export default ItemListContainer;