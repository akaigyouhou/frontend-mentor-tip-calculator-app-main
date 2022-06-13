import { useState, useEffect } from 'react';
import "./operate.css";


const Operate = ({
    setTipPerson,
    setTotalPerson,
    setReset,
    bill, setBill,
    customTip, setCustomTip,
    tip, setTip,
    person, setPerson,
    error, setError
}) => {

    const select = [5, 10, 15, 25, 50];

    const handleBill = (e) => {
        setBill(e.target.value);
    }

    const handleSelect = (e) => {
        setCustomTip("");
        setTip(e.target.value);
    }

    const handleCustomTip = (e) => {
        const tip = e.target.value;
        setCustomTip(tip);
        setTip(tip);
    }

    const handleChangePeople = (e) => {
        const value = e.target.value;
        if (value === '0') {
            setError(true);
        } else {
            setError(false);
            setPerson(value);
        }
    }

    useEffect(() => {
        if (person === "0") {
            setTipPerson(0);
        }
        const tipResult = bill * tip / 100 / person;
        if (Number.isFinite(tipResult)) {
            setReset(true);
            setTipPerson(Math.floor(tipResult * 100) / 100);
        }

    }, [bill, tip, person])

    useEffect(() => {
        if (person === "0") {
            setTotalPerson(0);
        }
        const totalResult = bill * (1 + tip / 100) / person;
        if (Number.isFinite(totalResult)) {
            setReset(true);
            setTotalPerson(Math.floor(totalResult * 100) / 100);
        }
    }, [bill, tip, person])

    return (
        <div className="operate-container">
            <form className="operate">
                <div className="operate__bill">
                    <label htmlFor="bill" className="opearte__bill__label text_dark-cyan">Bill</label>
                    <input id="bill" className="input operate__bill__input" type="number" value={bill} onChange={handleBill} placeholder="0"></input>
                    <span></span>
                </div>
                <div className="operate__select-tip">
                    <div className="opearte__select-tip__title text_dark-cyan">Select Tip %</div>
                    <div className="operate__select-tip__area">
                        {select.map((option, index) => (
                            <label key={option} htmlFor={`select-${option}%`} className={"button operate__select-tip__label" + (tip === option.toString() ? " operate__select-tip__label_checked" : "")}>
                                <input type="radio" 
                                    id={`select-${option}%`}
                                    name="select" value={option}
                                    checked={tip === option.toString()}
                                    onChange={handleSelect} />
                                {option}%
                            </label>
                        ))}
                        <input type="number" 
                            value={customTip} 
                            onChange={handleCustomTip} 
                            className="button button-text opearte__select-tip__input" 
                            placeholder="Custom" />
                    </div>
                </div>
                <div className="operate__number-of-people">
                {error && <p className="error-message">Can't be zero</p>}
                    <label htmlFor="number-of-people" className="operate__number-of-people__label text_dark-cyan">Number of People</label>
                    <input type="number"
                    id="number-of-people"
                    className={"input operate__number-of-people__input" + (error ? " operate__number-of-people__input_error" : "")}
                    onChange={handleChangePeople}
                    placeholder="0"
                    step="1"
                    value={person}
                    ></input>
                    <span></span>
                </div>
            </form>
        </div>
    );
}

export default Operate;
