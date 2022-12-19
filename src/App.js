import { useState, useEffect } from 'react';
import './index.css';

function App() {
    const [count, setCount] = useState(60)
    const [action, setAction] = useState("start")
    const [start, setStart] = useState(false)
    const [restartNow, setRestartNow] = useState(false)

    useEffect(() => {
        if (start && count > 0 && !restartNow) {
            setTimeout(() => setCount(count - 1), 1000)
        } else if (restartNow) {
            setCount(60)
        }
    }, [count, start, restartNow])

    const buttonAction = () => {
        if (action === 'start') {
            setAction('pause')
            setRestartNow(false)
            setStart(true)
        } else {
            setAction('start')
            setRestartNow(false)
            setStart(false)
        }
    }

    const restart = () => {
        if (action !== 'start') {
            setAction('start')
            setStart(false)
            setRestartNow(true)
        } else {
            setStart(false)
            setRestartNow(true)
        }
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => buttonAction()}>{action}</button>
            <button onClick={() => restart()}>restart</button>
        </div>
    );
}

export default App;
