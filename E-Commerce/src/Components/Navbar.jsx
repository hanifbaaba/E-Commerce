import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart(0)</Link>
          </li>
        </ul>
      </nav>
      {/* <h1>Navbar</h1> */}
    </div>
  );
}
