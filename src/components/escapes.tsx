import React, {useState} from "react";
import {escape as escapeHTML} from "@f0c1s/escape-html";

const {escape: escapeJS} = require("@f0c1s/escape-javascript");

export function Escapes(props: any) {
    const [show, setShow] = useState(true);
    if (!props.input) {
        return null;
    }
    return <section className="flex y-flex">
        <h2 className="clickable" onClick={_ => setShow(!show)}>Escapes</h2>
        {show && <div className="flex y-flex">
            <div className="flex x-flex">
                <div>esc HTML</div>
                <div>{escapeHTML(props.input)}</div>
            </div>
            <div className="flex x-flex">
                <div>esc JS</div>
                <div>{escapeJS(props.input)}</div>
            </div>
        </div>}
    </section>;
}
