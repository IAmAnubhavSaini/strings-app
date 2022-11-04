import React, {useState} from "react";
// @ts-ignore
import rot5 from "@f0c1s/security-rot/src/rot5";
// @ts-ignore
import rot13 from "@f0c1s/security-rot/src/rot13";
// @ts-ignore
import rot47 from "@f0c1s/security-rot/src/rot47";
// @ts-ignore
import {rotations} from "@f0c1s/security-rot/src/rot13n";

export function ROT(props: any) {
    const [show, setShow] = useState(true);
    if (!props.input) {
        return null;
    }
    return <section className="flex y-flex">
        <h2 className="clickable" onClick={_ => setShow(!show)}>ROT</h2>
        {show && <div className="flex y-flex">
            <div className="flex x-flex">
                <div>rot5</div>
                <div>{rot5(props.input) || "<empty string>"}</div>
            </div>
            <div className="flex x-flex">
                <div>rot13</div>
                <div>{rot13(props.input) || "<empty string>"}</div>
            </div>
            <div className="flex x-flex">
                <div>rot47</div>
                <div>{rot47(props.input) || "<empty string>"}</div>
            </div>
            <div className="flex x-flex">
                <div>rotations</div>
                <div className="flex y-flex">
                    {rotations(props.input).map(({i, rot}: { i: number, rot: string }, index: number) => {
                        return <div className="flex x-flex" key={`${rot}-${i}-${index}`}>
                            <div>{i}</div>
                            <div>{rot}</div>
                        </div>;
                    })}
                </div>
            </div>
        </div>}
    </section>;
}
