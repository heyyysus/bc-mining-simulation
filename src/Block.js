import { useEffect } from "react";
import "./Block.css";

export default function Block({ block_id, prev_hash, transactions, nonce, hash }) {

    const formatHash = (hash) => {
        let formattedHash = "";
        for (let i = 0; i < hash.length; i++) {
            if (i % 4 === 0 && i !== 0) {
                formattedHash += " ";
            }
            formattedHash += hash[i];
        }
        return formattedHash;
    }

    

  return (
    <div className="block">
        <div className="block__id value_container">
            <span className="block__id__label label">Block ID: {block_id}</span>
        </div>
        <div className="block__prev-hash value_container" >
            <span className="block__prev-hash__label label">Previous Hash:</span>
            <span className="block__prev-hash__value value">{ formatHash(prev_hash.slice(0, 16)) + " . . ." }</span>
        </div>
        <div className="block__transactions value_container">
            <span className="block__transactions__label label">Transactions:</span>
            {transactions.map(transaction => <span className="block__transactions__value value">{transaction}</span>)}
        </div>
        <div className="block__nonce value_container">
            <span className="block__nonce__label label">Nonce: {nonce}</span>
        </div>
        <div className="block__hash value_container">
            <span className="block__hash__label label">Hash:</span>
            <span className="block__hash__value value">{ formatHash(hash.slice(0, 20)) + " . . ." }</span>
        </div>
    </div>
  );
}