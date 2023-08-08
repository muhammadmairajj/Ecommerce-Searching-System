import './style.css';

const Navbar = (props: any) => {
  const { handleInputChange, query } = props;
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter Your Search Shoes ... "
          className="search-input"
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="/">
          <i className="fa-solid fa-heart"></i>
        </a>
        <a href="/">
          <i className="fa-solid fa-user"></i>
        </a>
        <a href="/">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
