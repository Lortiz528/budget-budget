import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/transactions">
        <div>Transactions</div>
      </Link>
      <Link to="/transactions/new">
        <div>New Transaction</div>
      </Link>
    </nav>
  );
}

export default Navbar;
