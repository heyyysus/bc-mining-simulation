import { useEffect } from "react";
import "./Block.css";

export default function Block({ prev_hash, transactions, timestamp, nonce, hash }) {

  return (
    <div className="block">
        <div className="block__prev-hash">
            <span className="block__prev-hash__label">Previous Hash:</span>
            <span className="block__prev-hash__value">{prev_hash}</span>
        </div>
        <div className="block__transactions">
            <span className="block__transactions__label">Transactions:</span>
            <span className="block__transactions__value">{transactions}</span>
        </div>
        <div className="block__timestamp">
            <span className="block__timestamp__label">Timestamp:</span>
            <span className="block__timestamp__value">{timestamp}</span>
        </div>
        <div className="block__nonce">
            <span className="block__nonce__label">Nonce:</span>
            <span className="block__nonce__value">{nonce}</span>
        </div>
        <div className="block__hash">
            <span className="block__hash__label">Hash:</span>
            <span className="block__hash__value">{hash}</span>
        </div>
    </div>
  );
}