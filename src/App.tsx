import React, {useState} from 'react';
import './App.css';
import {SHA} from "./components/sha";
import {ROT} from "./components/rot";
import {BASE64} from "./components/base64";
import {Escapes} from "./components/escapes";

function App() {
    const [input, setInput] = useState("@f0c1s/strings-app");
    return (<div className="App flex y-flex">
        <header>
            <h1>Strings</h1>
            <input className="input" value={input}
                   onChange={(v: React.ChangeEvent<HTMLInputElement>) => setInput(v.currentTarget.value)}/>
        </header>
        <BASE64 input={input}/>
        <SHA input={input}/>
        <Escapes input={input}/>
        <ROT input={input}/>
    </div>);
}

export default App;
