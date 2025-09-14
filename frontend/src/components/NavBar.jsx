function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">
      
        Shop<span>Mate</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/deals">Deals</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
export default NavBar;

