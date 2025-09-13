export default function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">
        Shop<span>Mate</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <button className="btn">Sign In</button>
        <button className="btn primary">Cart 🛒</button>
      </div>
    </header>
  );
}
