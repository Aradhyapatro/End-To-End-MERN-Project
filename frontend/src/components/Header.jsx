import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const Logout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Goal-Setter</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={Logout}>
              <FaSignOutAlt></FaSignOutAlt>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Log-in
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
