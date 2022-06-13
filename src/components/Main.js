import { useState } from 'react';
import "./main.css";
import Operate from './Operate';
import Show from './Show';

const Main = () => {
    const [tipPerson, setTipPerson] = useState(0);
    const [totalPerson, setTotalPerson] = useState(0);
    const [reset, setReset] = useState(false);

    const [bill, setBill] = useState(142.55);
    const [customTip, setCustomTip] = useState("");
    const [tip, setTip] = useState("15");
    const [person, setPerson] = useState("5");
    const [error, setError] = useState(false);

    const handleReset = () => {
        setBill("");
        setCustomTip("");
        setTip("");
        setPerson("");
        setTipPerson(0);
        setTotalPerson(0);
        setError(false);
        setReset(false);
    }
    return (
        <main className="main">
            <Operate 
                setTipPerson={setTipPerson} 
                setTotalPerson={setTotalPerson} 
                setReset={setReset} 
                bill={bill} setBill={setBill}
                customTip={customTip} setCustomTip={setCustomTip}
                tip={tip} setTip={setTip}
                person={person} setPerson={setPerson}
                error={error} setError={setError}
            />
            <Show tipPerson={tipPerson} totalPerson={totalPerson} reset={reset} setReset={setReset} handleReset={handleReset} />
        </main>
    );
}

export default Main;
