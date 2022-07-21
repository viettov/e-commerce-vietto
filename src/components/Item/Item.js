const Item = (props) => {
    return (
        <div className="Item">
            <h3>{props.titulo}</h3>
            <img src={props.img}></img>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
        </div>
    )
}

export default Item;