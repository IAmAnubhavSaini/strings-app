import React, {useState} from "react";
import {sha256, sha512} from "@f0c1s/node-sha-lib/src/package";

export function SHA(props: any) {
    const [show, setShow] = useState(true);
    return <section className="SHA y-flex flex">
        <h2 className="clickable" onClick={_ => setShow(!show)}>SHA</h2>
        {show && <div className="y-flex flex">
            <div className="x-flex flex">
                <div>sha-256</div>
                <div>{sha256(props.input)}</div>
            </div>
            <div className="x-flex flex">
                <div>sha-512</div>
                <div>
                    <div>{sha512(props.input)}</div>
                </div>
            </div>
        </div>}
    </section>;

}
