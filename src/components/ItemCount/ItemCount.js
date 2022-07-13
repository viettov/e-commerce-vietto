import React, {useState} from "react";

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);

    const restar = () => {
        initial < count ? setCount(count - 1) : count = count;
    }

    const agregar = () => {
        count < stock ? setCount(count+1) : count = count; 

    }

    return <>
    <button onClick={restar}>-</button>
    <p>{count}</p>
    <button onClick={agregar}>+</button>
    </>
}

export default ItemCount;