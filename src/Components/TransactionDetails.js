import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaTrashAlt, FaEdit, FaUndo } from 'react-icons/fa';
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const trash = FaTrashAlt();
  const edit = FaEdit();
  const undo = FaUndo();
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate('/not-found');
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate('/transactions');
      })
      .catch(() => {
        navigate('/not-found'); // or maybe res.send("deletion error!")
      });
  };

  return (
    <div>
      <ul className="trans-details">
        <h2>{transaction.item_name}</h2>
        <li> Transaction Date: {transaction.date}</li>
        <li> Amount: ${transaction.amount}</li>
        <li>From: {transaction.from}</li>
        <li>Transaction category: {transaction.category}</li>
        <li>Transaction Type: {transaction.type}</li>
      </ul>
      <div className="showNavigation">
        <div>
          <Link to={`/transactions`}>
            <button>GO BACK {undo}</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>EDIT {edit}</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>DELETE {trash}</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
