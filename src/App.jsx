import { useState, useRef } from 'react'
import Token from './components/Token'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0);
  const clicked = useRef([]);
  const boxes = [42];
  for (let i = 0 ; i < 42; i++){
    boxes[i] = 1;
  }

  function click(index){
    if (!clicked.current.includes(index)){
      clicked.current.push(index);
      setClicks(prev => prev +=1);
    }
  }

  return (
    <>
      <div>
        <div className="container">
          <h1 className='title'>Connect 4</h1>
          <div>Clicks: {clicks}</div>
          <div className="grid-container">
            {boxes.map((box, index) => (
                <div className = "grid" key={index} onClick={() =>click(index)}> 
                  <Token totalClicks={clicks} />
                  </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
