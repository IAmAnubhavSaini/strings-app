import React, {useState} from "react";

const {encode, decode} = require("@m1yh3m/base.64.codec.node.lib/src/codec");


export function BASE64(props: any) {
    const [show, setShow] = useState(true);
    if (!props.input) {
        return null;
    }
    return <section className="flex y-flex">
        <h2 className="clickable" onClick={_ => setShow(!show)}>BASE64</h2>
        {show && <div className="flex y-flex">
            <div className="flex x-flex">
                <div>encode</div>
                <div>{encode(props.input)}</div>
            </div>
            <div className="flex x-flex">
                <div>decode</div>
                <div>{decode(props.input)}</div>
            </div>
        </div>}
    </section>;
}
