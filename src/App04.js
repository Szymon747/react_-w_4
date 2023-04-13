import Item04 from "./Item04"
import { useState } from 'react';

const App = () => {

  //wyjściowa tablica

  const INIT_LIST = [];

  // state

  const [list, setList] = useState(INIT_LIST)

  const addToEnd = () => {
    setList(() => {
      return [...list, Math.floor(Math.random() * 1000)] // nowa tablica z dodanym elementem na końcu
    })
  }

  const addToStart = () => {
    setList(() => {
      return [Math.floor(Math.random() * 1000), ...list] // nowa tablica z dodanym elementem na początku
    })
  }

  const delFirst = () => {
    setList(() => {
      return [...list.filter((item, i) => i !== 0)] // nowa przefiltrowana tablica
    })
  }


  return (
    <>
      <button onClick={() => addToEnd()}>dodaj na koniec</button>
      <button onClick={() => addToStart()}>dodaj na początek</button>
      <button onClick={() => delFirst()}>usuń pierwszy</button>
      {
        list.map((element) => {
          return <Item04 val={element} />
        })

      }

    </>

  );
}
export default App
