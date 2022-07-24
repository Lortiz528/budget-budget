import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <li key={index}>
              <Link to={`/transactions/${index}`}>
                <h3>{transaction.item_name}</h3>
              </Link>
              <p>
                <strong>Amount: </strong>${transaction.amount}
              </p>
              <p>{transaction.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Transactions;
