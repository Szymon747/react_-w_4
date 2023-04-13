import Item03 from "./Item03"
import { useState } from 'react';

const App = () => {


  // visible - wartość do zmieniania za pomocą useState()
  // setVisible - funkcja dokonująca zmiany
  // true - początkowa wartość visible

  const [visible, setVisible] = useState(true)

  const setVis = (val) => {
    console.log("halo", val, { visible }, visible)
    setVisible(val)
  }

  return (
    <>
      <button onClick={() => setVis(true)}>visible</button>
      <button onClick={() => setVis(false)}>invisible</button>
      <Item03 visible={visible} />
    </>
  );
}

export default App;