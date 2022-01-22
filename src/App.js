import React, {useEffect, useRef, useState} from 'react';

function App() {
  const [name, setName] = useState('')
  const fff = useRef();

  function aa(){
    fff.current.focus();
    console.log(fff)
  }

  return (
    <div className="App">
      <input ref={fff} value={name} onChange={e => setName(e.target.value)}/>
      {/* <div ref={prevName}>
        Name is {name} and to be {prevName.current}
      </div> */}
      <button onClick={aa} >
        Click
      </button>
    </div>
  );
}

export default App;
