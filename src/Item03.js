const Item = (props) => {

    
    let wartosc="visible"
    let pomoc=props.visible
    if(pomoc===true){
        wartosc="visible"
    }
    else{
        wartosc="hidden"
    }


    return (
        <>
            <div style={{ visibility: wartosc }}>
                <h1>ITEM 03</h1>
            </div>
        </>
    )
}
export default Item