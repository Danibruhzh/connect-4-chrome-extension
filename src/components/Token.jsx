import { useState, useRef, useEffect} from "react";

function Token({ totalClicks, active}) {
    const [state, setState] = useState(0);
    const flag = useRef(false);

    useEffect(() => {
        if (active&&flag.current==false) {
            if (totalClicks % 2 == 0) {
                setState(1);
            } else {
                setState(2);
            }
            flag.current = true;
        }
        }
    )

    return (
        <div className="grid">
            <svg className={state === 0 ? "empty" : state === 1 ? "yellow" : "red"}>
            </svg>
        </div>
    )
}

export default Token