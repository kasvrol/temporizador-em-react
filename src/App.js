import { useState, useEffect } from 'react';
import "./styles/global.css"

function App() {
    const [count, setCount] = useState(60)
    const [action, setAction] = useState("Start")
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
        if (action === 'Start') {
            setAction('Pause')
            setRestartNow(false)
            setStart(true)
        } else {
            setAction('Start')
            setRestartNow(false)
            setStart(false)
        }
    }

    const restart = () => {
        if (action !== 'Start') {
            setAction('Start')
            setStart(false)
            setRestartNow(true)
        } else {
            setStart(false)
            setRestartNow(true)
        }
    }

    return (
        <div className="flex items-center justify-center w-full h-full bg-yellow-200">
            <section className="flex flex-col items-center justify-evenly  w-80 h-64 bg-orange-500 rounded-lg ">
                <p className="font-extralight  text-8xl text-slate-200">{count}</p>
                <section className="flex flex-row items-center justify-evenly  w-52 ">
                    <button className=" bg-orange-700 w-20 h-8 rounded-lg text-lg text-slate-200" onClick={() => buttonAction()}>{action}</button>
                    <button className="bg-orange-700  w-20 h-8 rounded-lg text-lg text-slate-200" onClick={() => restart()}>Restart</button>
                </section>
            </section>

        </div >
    );
}

export default App;
