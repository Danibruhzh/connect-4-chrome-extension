import { useState, useRef } from "react";

function Token({ totalClicks, active}) {
    const [state, setState] = useState(0);
    const flag = useRef(false);

    function change() {
        if (active) {
            if (totalClicks % 2 == 0) {
                setState(1);
            } else {
                setState(2);
            }
            flag.current = true;
        }
    }

    return (
        <div className="grid" onChange={() => change()}>
            <svg className={state === 0 ? "empty" : state === 1 ? "yellow" : "red"}>
            </svg>
        </div>
    )
}

export default Token