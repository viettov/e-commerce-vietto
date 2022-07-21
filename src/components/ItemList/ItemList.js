import Item from '../Item/Item';

const ItemList = ({ items }) => {

    return (
        <>
        {
            items.map(item => 
            <Item 
            key={item.id}
            titulo={item.titulo} 
            img={item.img}
            descripcion={item.descripcion}
            precio={item.precio}/>
            )
        }
    </>
    )
}

export default ItemList;