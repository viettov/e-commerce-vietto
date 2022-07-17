const Item = (props) => {
    return (
        <div className="Item">
            <h3>{props.titulo}</h3>
            <img src={props.imagen} alt=""></img>
            <p>{props.descripcion}</p>
            <h3>{props.precio}</h3>
        </div>
    )
}

export default Item;