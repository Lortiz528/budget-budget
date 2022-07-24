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

  const transactionsList = transactions.map((transaction, index) => {
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
  });

  const getTotal = () => {
    let sum = 0;
    for (let tran of transactions) {
      sum += Number(tran.amount);
    }
    return sum;
  };

  const bankAccountSum = getTotal();

  const accountColor = (bankAccountSum) => {
    if (bankAccountSum >= 0) {
      return 'green';
    } else {
      return 'red';
    }
  };

  return (
    <div>
      <h1>
        Bank Account Total:{' '}
        <span className={accountColor(bankAccountSum)}>${bankAccountSum}</span>{' '}
      </h1>
      <ul>{transactionsList}</ul>
    </div>
  );
}

export default Transactions;
