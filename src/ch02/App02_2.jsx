function App02_2() {

    return <div>
        <InputBox />
        <ButtonBox />
        <DisplayBox />
    </div>
}

export default App02_2;

function InputBox() {

    return <div className="input-box">
        <input type="text" />
        <input type="text" />
    </div>
}

function ButtonBox() {

    return <div className="button-box">
        <button>확인</button>
    </div>
}

function DisplayBox() {

    return <div className="display-box">
        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
}