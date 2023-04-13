const Item = (props) => {
    console.log(props)
    return (
        <>
            <div>
                <span>{props.val}</span>
            </div>
        </>
    )
}
export default Item