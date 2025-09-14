import { useState, useRef, useEffect } from 'react'
import Token from './components/Token'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0);
  const [column1, setColumn1] = useState(5);
  const [column2, setColumn2] = useState(5);
  const [column3, setColumn3] = useState(5);
  const [column4, setColumn4] = useState(5);
  const [column5, setColumn5] = useState(5);
  const [column6, setColumn6] = useState(5);
  const [column7, setColumn7] = useState(5);
  const [cur, setCur] = useState(0);
  const clicked = useRef([]);
  const boxes = [42];
  for (let i = 0 ; i < 42; i++){
    boxes[i] = 1;
  }

  function click(index){
    if (index%7==0){
      setCur(7*column1);
      setColumn1(prev => prev -= 1);
    }
    if (index%7==1){
      setCur(7*column1+1);
      setColumn2(prev => prev -= 1);
    }
    if (index%7==2){
      setCur(7*column1+2);
      setColumn3(prev => prev -= 1);
    }
    if (index%7==3){
      setCur(7*column1+3);
      setColumn4(prev => prev -= 1);
    }
    if (index%7==4){
      setCur(7*column1+4);
      setColumn5(prev => prev -= 1);
    }
    if (index%7==5){
      setCur(7*column1+5);
      setColumn6(prev => prev -= 1);
    }
    if (index%7==6){
      setCur(7*column1+6);
      setColumn7(prev => prev -= 1);
    }


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
                <div className = "grid" key={index} onClick={() => click(index)}> 
                  <Token totalClicks={clicks} active={index===cur}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
