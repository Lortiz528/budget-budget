import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();

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

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        //auto populate form fields with existing transaction data
        setTransaction(res.data);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then(() => {
        navigate(`/transactions/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="edit-form">
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
          placeholder="EX: July 21"
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
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;
