import {useState} from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);
  
  // const [name] = useState(user.name);
  
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };


  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Felanmälan - KålleKärr</Link>
      </div>
      <ul>
        {user ? (
          <li>
           <h3>Inloggad som: {user.name}</h3>
          </li>
        ) : (
          <>
            <li>
             <h3></h3>
            </li>
          </>
        )}
      </ul>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logga Ut
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Logga In
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Registrera
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
