import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item && item.image
            ?
            <h3>{item.descripcion}</h3>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;