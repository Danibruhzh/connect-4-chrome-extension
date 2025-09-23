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
  const [cur, setCur] = useState(99);
  const clicked = useRef([]);
  const boxes = [42];
  for (let i = 0 ; i < 42; i++){
    boxes[i] = i%7;
  }

  // useEffect(()=>{
  //   console.log(cur)
  // }, [clicks, cur])


  function click(col, index){
    if (col==0 && column1>=0){
      setCur(7*column1);
      setColumn1(prev => prev -= 1);
      setClicks(prev => prev+=1);
    }
    if (col==1 && column2>=0){
      setCur(7*column2+1);
      setColumn2(prev => prev -= 1);
      setClicks(prev => prev+=1);
    }
    if (col==2 && column3>=0){
      setCur(7*column3+2);
      setColumn3(prev => prev -= 1);
      setClicks(prev => prev+=1);
    }
    if (col==3 && column4>=0){
      setCur(7*column4+3);
      setColumn4(prev => prev -= 1);
      setClicks(prev => prev+=1);
    }
    if (col==4 && column5>=0){
      setCur(7*column5+4);
      setColumn5(prev => prev -= 1);
      setClicks(prev => prev+=1);
    }
    if (col==5 && column6>=0){
      setCur(7*column6+5);
      setColumn6(prev => prev -= 1);
      setClicks(prev => prev+=1);
    }
    if (col==6 && column7>=0){
      setCur(7*column7+6);
      setColumn7(prev => prev -= 1);
      setClicks(prev => prev+=1);
    }
    console.log(col, index);
  }

  return (
    <>
      <div>
        <div className="container">
          <h1 className='title'>Connect 4</h1>
          <div>Clicks: {clicks}</div>
          <div className="grid-container">
            {boxes.map((box, index) => (
                <div className = "grid" key={index} onClick={() => click(box, index)}> 
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
