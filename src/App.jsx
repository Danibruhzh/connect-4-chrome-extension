import { useState, useRef, useEffect } from 'react'
import Token from './components/Token'
import './App.css'

function App() {
  const [play, setPlay] = useState(true);
  const [clicks, setClicks] = useState(0);
  const [column1, setColumn1] = useState(5);
  const [column2, setColumn2] = useState(5);
  const [column3, setColumn3] = useState(5);
  const [column4, setColumn4] = useState(5);
  const [column5, setColumn5] = useState(5);
  const [column6, setColumn6] = useState(5);
  const [column7, setColumn7] = useState(5);
  const [cur, setCur] = useState(99);
  const boxes = [42];
  for (let i = 0; i < 42; i++) {
    boxes[i] = i % 7;
  }
  const [yellow, setYellow] = useState([]);
  const [red, setRed] = useState([]);

  function check_right(index, count, list, set = new Set(list)) {
    if (count < 4) {
      if (set.has(index + 1)) {
        console.log("right");
        count += 1;
        return check_right(index + 1, count, list, set);
      } else {
        return count;
      }
    } else {
      return 4;
    }
  }
  function check_left(index, count, list, set = new Set(list)) {
    if (count < 4) {
      if (set.has(index - 1)) {
        console.log("left");
        count += 1;
        return check_left(index - 1, count, list, set);
      } else {
        return count;
      }
    } else {
      return 4;
    }
  }

  function check_side(index, list) {
    if (check_right(index, 1, list) + check_left(index, 0, list) >= 4) {
      console.log("win");
      setPlay(false);
    }
  }

  function check_down(index, count, list, set = new Set(list)) {
    if (count < 4) {
      if (set.has(index + 7)) {
        console.log("down");
        count += 1;
        check_down(index + 7, count, list, set);
      }
    } else {
      console.log("win");
      setPlay(false);
    }
  }

  function check_down_right(index, count, list, set = new Set(list)) {
    if (count < 4) {
      if (set.has(index + 8)) {
        console.log("down right");
        count += 1;
        return check_down_right(index + 8, count, list, set);
      } else {
        return count;
      }
    } else {
      return 4;
    }
  }
  function check_up_left(index, count, list, set = new Set(list)) {
    if (count < 4) {
      if (set.has(index - 8)) {
        console.log("up left");
        count += 1;
        return check_up_left(index - 8, count, list, set);
      } else {
        return count;
      }
    } else {
      return 4;
    }
  }

  function check_diag_left(index, list) {
    if (check_down_right(index, 1, list) + check_up_left(index, 0, list) >= 4) {
      console.log("win");
      setPlay(false);
    }
  }

  function check_up_right(index, count, list, set = new Set(list)) {
    if (count < 4) {
      if (set.has(index - 6)) {
        console.log("right");
        count += 1;
        return check_up_right(index - 6, count, list, set);
      } else {
        return count;
      }
    } else {
      return 4;
    }
  }
  function check_down_left(index, count, list, set = new Set(list)) {
    if (count < 4) {
      if (set.has(index + 6)) {
        console.log("left");
        count += 1;
        return check_down_left(index + 6, count, list, set);
      } else {
        return count;
      }
    } else {
      return 4;
    }
  }

  function check_diag_right(index, list) {
    if (check_up_right(index, 1, list) + check_down_left(index, 0, list) >= 4) {
      console.log("win");
      setPlay(false);
    }
  }

  function check(index, list) {
    check_side(index, list);
    check_down(index, 1, list);
    check_diag_left(index, list);
    check_diag_right(index, list);
  }

  useEffect(() => {
    console.log(cur)
    if (clicks % 2 == 0) {
      setYellow(prev => [...prev, cur]);
      check(cur, yellow);
    } else {
      setRed(prev => [...prev, cur]);
      check(cur, red);
    }
    console.log(yellow, red);
  }, [clicks, cur])

  function click(col, index) {
    if (play) {
      if (col == 0 && column1 >= 0) {
        setCur(7 * column1);
        setColumn1(prev => prev -= 1);
        setClicks(prev => prev += 1);
      }
      if (col == 1 && column2 >= 0) {
        setCur(7 * column2 + 1);
        setColumn2(prev => prev -= 1);
        setClicks(prev => prev += 1);
      }
      if (col == 2 && column3 >= 0) {
        setCur(7 * column3 + 2);
        setColumn3(prev => prev -= 1);
        setClicks(prev => prev += 1);
      }
      if (col == 3 && column4 >= 0) {
        setCur(7 * column4 + 3);
        setColumn4(prev => prev -= 1);
        setClicks(prev => prev += 1);
      }
      if (col == 4 && column5 >= 0) {
        setCur(7 * column5 + 4);
        setColumn5(prev => prev -= 1);
        setClicks(prev => prev += 1);
      }
      if (col == 5 && column6 >= 0) {
        setCur(7 * column6 + 5);
        setColumn6(prev => prev -= 1);
        setClicks(prev => prev += 1);
      }
      if (col == 6 && column7 >= 0) {
        setCur(7 * column7 + 6);
        setColumn7(prev => prev -= 1);
        setClicks(prev => prev += 1);
      }


      console.log(col, index);
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
              <div className="grid" key={index} onClick={() => click(box, index)}>
                <Token totalClicks={clicks} active={index === cur} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
