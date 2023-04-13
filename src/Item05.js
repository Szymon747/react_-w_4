const Item = (props) => {

    // wywołanie funkcji rodzica

    const deleteItem = () => {
        props.delSelected(props.index)

    }

    return (
        <>
        {props.val}
        <button onClick={deleteItem}>delete item</button>
        </>
    )
}
export default Item