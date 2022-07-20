import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import products from '../../utils/products/products.json';
import customFetch from "../../utils/products/customFetch";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {


    const [dato, setDato] = useState({});
    const {idItem} = useParams(); 

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem))) 
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);
    

    return (
        <ItemDetail dato={dato}/>
    );
}


export default ItemDetailContainer; 