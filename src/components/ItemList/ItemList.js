import Item from '../Item/Item';

const ItemList = ({ items }) => {

    return (
        <>
        {
            items.map(item => 
            <Item 
            key={item.id}
            titulo={item.titulo}
            imagen={item.imagen}
            descripcion={item.descripcion}/>)
        }
    </>
    )
}

export default ItemList;