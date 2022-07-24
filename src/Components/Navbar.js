import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <h1>Budget App</h1>
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/transactions">
        <div>Show Transactions</div>
      </Link>
      <Link to="/transactions/new">
        <div>New Transaction</div>
      </Link>
    </nav>
  );
}

export default Navbar;
