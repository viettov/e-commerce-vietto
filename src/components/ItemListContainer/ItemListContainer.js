const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default ItemListContainer;