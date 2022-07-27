import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
    type: '',
  });

  const handleTextChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: event.target.value,
    });
    //console.log('target.id :', event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="new-tran">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name: </label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
          required
          placeholder="paycheck, groceries, etc..."
        />
        <br />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="65, -100, etc..."
        />
        <br />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleTextChange}
          required
          placeholder="EX: 7/28/2022"
        />
        <br />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          type="text"
          onChange={handleTextChange}
          value={transaction.from}
          required
          placeholder="work, bank, etc..."
        />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          name="category"
          value={transaction.category}
          placeholder="food, vehicle, housing, etc..."
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="type">Type: </label>
        <input
          id="type"
          type="text"
          name="type"
          value={transaction.type}
          placeholder="income / expense"
          onChange={handleTextChange}
          required
        />
        <br />

        <input className="submit" type="submit" />
      </form>
      <Link to={`/transactions`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default TransactionNewForm;
