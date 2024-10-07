import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-mobile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <button type="button" className="logout-mobile-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </button>
      </div>

      <div className="nav-content nav-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <li className="nav-menu-list-item">Home</li>
          <li className="nav-menu-list-item">Products</li>
          <li className="nav-menu-list-item">Cart</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-mobile-list">
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="mobile-icon"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="mobile-icon"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="mobile-icon"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
