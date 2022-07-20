import Item from '../Item/Item';

const ItemList = ({ items }) => {

    return (
        <>
        {
            items.map(item => 
            <Item 
            key={item.id}
            titulo={item.titulo} />
            )
        }
    </>
    )
}

export default ItemList;