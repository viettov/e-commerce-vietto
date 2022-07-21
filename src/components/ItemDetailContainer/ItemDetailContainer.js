import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import customFetch from "../../utils/customFetch";
import ItemDetail from '../ItemDetail/ItemDetail';
const { products } = require('../../utils/products/products');


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer; 