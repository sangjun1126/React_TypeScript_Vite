import { useState } from "react";
import TicTacToe from "./TicTacToe";

export default function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>카운터 만들어보기</h1>
            <MyButton count = {count} onClick = {handleClick} />
            <MyButton count = {count} onClick = {handleClick} />
        </div>
    )
}

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            Click {count} times
        </button>
    )
}