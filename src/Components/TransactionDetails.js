import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
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
        navigate('/not found');
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate('/transactions');
      })
      .catch(() => {
        console.warn('error');
      });
  };

  return (
    <div className="trans-details">
      <ul>
        <h2>{transaction.item_name}</h2>
        <li> Amount: ${transaction.amount}</li>
        <li> Transaction Date: {transaction.date}</li>
        <li>Transaction category: {transaction.category}</li>
        <li>Transaction Type: {transaction.type}</li>
      </ul>
      <div className="showNavigation">
        <div>
          <Link to={`/transactions`}>
            <button>Back to transactions</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit transaction</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete transaction</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
