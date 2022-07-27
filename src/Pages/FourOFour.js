import {Link} from 'react-router-dom'

function FourOFour() {
  return (
    <div className="error-page">
      <img
        src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-768x374.png"
        alt="error"
      ></img>
      <h1>Error!!!! Page Not Found</h1>

      <Link to="/">Return Home</Link>
    </div>
  );
}

export default FourOFour;
