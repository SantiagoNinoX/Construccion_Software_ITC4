import { useState } from "react";

export default function Componentes() {
    const [text, setText] = useState();
    const textOnChange = (event) => {
        setText(event.target.value);
    };

    return(
        <div>
            <input type="text" value={text} onChange={textOnChange}></input>
            <p>text input: {text}</p>
        </div>
    )
}