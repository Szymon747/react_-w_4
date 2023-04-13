import Item05 from "./Item05"
import { useState } from 'react';

const App = () => {

  //wyjściowa tablica

  const INIT_LIST = [];

  //state

  const [list, setList] = useState(INIT_LIST)


  const delSelected = (val) => {
    let x = val
    setList(() => {
      return [...list.filter((item, i) => i !== x)]
    })
  }


  const delAll = (val) => {
    let help=[]
    list=help
  }


  return (
    <>
      <button onClick={() => delAll()}>usuń wszystkie</button>

      {
        list.map((element) => {
          return <Item05 val={element}  delSelected={delSelected} />
        })

      }
    </>
  );
}
export default App