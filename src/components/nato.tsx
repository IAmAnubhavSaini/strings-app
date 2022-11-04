import React, {useState} from "react";
import {word2words as nato} from "node.nato-phonetics.lib/src";


export function Nato(props: any) {
    const [show, setShow] = useState(true);
    if (!props.input) {
        return null;
    }
    return <section className="flex y-flex">
        <h2 className="clickable" onClick={_ => setShow(!show)}>Nato</h2>
        {show && <div className="flex y-flex">
            <div className="flex x-flex">
                <div>&nbsp;</div>
                <div>{nato(props.input).join(" ")}</div>
            </div>
        </div>}
    </section>;
}
