import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  ClipboardText,
  ShoppingCart,
  Headphones,
  List,
  HandWaving
} from "phosphor-react";
import "../asset/css/navbar.css";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMouseEnter = () => {
    setShowLoginOptions(true);
  };

  const handleMouseLeave = () => {
    setShowLoginOptions(false);
  };

  
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="home">ZGear</Link>

        <Link to="/categogy" className="categogy">
          <List size={32} />
          Danh mục
        </Link>

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <Link to="/Look-up-orders" className="lookuporders">
          <ClipboardText size={32} />
          Tra cứu <br></br>
          đơn hàng
        </Link>

        <Link to="/hotline" className="hotline">
          <Headphones size={32} />
          Hotline <br></br>
          1800.6975
        </Link>

        <Link to="/cart" className="cart">
          <ShoppingCart size={32} />
          Giỏ hàng
        </Link>

        <div
          className="login"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <User size={32} />
          Đăng nhập
          {showLoginOptions && (
            <div className="login-options">
              <HandWaving size={20} color="#505c8c" weight="light" />
              <h2>Xin chào, vui lòng đăng nhập</h2> 
              <Link to="/login">Đăng nhập</Link>
              <Link to="/register">Đăng ký</Link>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
