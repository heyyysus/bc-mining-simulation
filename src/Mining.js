import { useState } from "react";
import Block from "./Block";
import "./Mining.css";

export default function Mining(){

    const [blocks, setBlocks] = useState([
    {
        block_id: 0,
        prev_hash: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
        transactions: ["Alice sent 10 BTC to Bob", "Bob sent 5 BTC to Charlie"],
        nonce: 0,
        hash: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4"
    },
    {
        block_id: 1,
        prev_hash: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
        transactions: ["Alice sent 10 BTC to Bob", "Bob sent 5 BTC to Charlie"],
        nonce: 0,
        hash: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4"
    },
    ]);

    return (
    <div>
        <div className="mining__container">
            { blocks.map(b => <Block
                block_id={b.block_id}
                prev_hash={b.prev_hash}
                transactions={b.transactions}
                nonce={b.nonce}
                hash={b.hash}
            />) }
        </div>
    </div>
    )
}