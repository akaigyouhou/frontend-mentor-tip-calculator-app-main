import "./show.css";

const Show = ({tipPerson, totalPerson, reset, handleReset}) => {
    const changeToShow = (str) => {
        let newStr = str.toString();
        if (!/\./.test(newStr)) {
            newStr += ".00";
        }
        if (/\./.test(newStr)) {
            const arr = newStr.split(".");
            if (arr[1].length === 1) {
                newStr += "0";
            }
        }
        return newStr;
    }

    const showedTipPerson = changeToShow(tipPerson);
    const showedTotalPerson = changeToShow(totalPerson);

    return (
        <div className="show-container">
            <div className="show">
                <div className="show__tip">
                    <div className="show__tip__text">
                        <div className="show__tip__title text_white">Tip Amount</div>
                        <div className="show__tip__unit text_light-cyan text_small">/ person</div>
                    </div>
                    <div className="text_strong-cyan text_big">${showedTipPerson}</div>
                </div>
                <div className="show__total">
                    <div className="show__total__text">
                        <div className="show__total__title text_white">Total</div>
                        <div className="show__total__unit text_light-cyan text_small">/ person</div>
                    </div>
                    <div className="text_strong-cyan text_big">${showedTotalPerson}</div>
                </div>
                <button className={"button show__button" + (reset ? "" : " show__button_forbid")} onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Show;
