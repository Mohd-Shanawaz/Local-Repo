import "./navbar.css";
function Navbar() {
  return (
    <div className="head">
      <div className="logo">
        <h1>V - Mart</h1>
      </div>
      <div id="links">
        <a href="">Home</a>
        <a href="">Jwellery</a>
        <a href="Mens-wear">Men's</a>
        <a href="Womens-wear">Women's</a>
        <a href="Kids-wear">Kid's</a>
      </div>
      <div id="opt">
        <i className="bi bi-cart4"></i>
        <i className="bi bi-person-circle"></i>
        <button>Log Out</button>
      </div>
    </div>
  );
}
export default Navbar;


