import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { MdHome, MdContactPage, MdAdminPanelSettings } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

Modal.setAppElement("#root");

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
    <header className="headerr">
      <div className="logo">
        <Link to="/">Olovs Hage - Samfällighet</Link>
      </div>

      <nav className="navbar fixed-right">
        <div className="container">
          <a className="navbar-brand">Meny</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Meny
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <RiCloseLine />
              </button>

              <ul>
                {user ? (
                  <li>
                    Inloggad som: {user.name}
                    {/* <h3>Roll: {adminSignedIn()}</h3> */}
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/login">
                        <div data-bs-dismiss="offcanvas">
                          <FaSignInAlt /> Logga In
                        </div>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="offcanvas-body">
              <div className="">
                <ul className="border border-grey navbar-nav justify-content-end flex-grow-1 pe-3 ">
                  <li className="nav-item ">
                    <a className="nav-link ">
                      <Link to="/">
                        <div data-bs-dismiss="offcanvas">
                          <MdHome />
                          Hem
                        </div>
                      </Link>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/about-us">
                        <div data-bs-dismiss="offcanvas">
                          <GrGroup /> Om Oss
                        </div>
                      </Link>
                    </a>
                  </li>
                  {user ? (
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/contact-us">
                          <div data-bs-dismiss="offcanvas">
                            <MdContactPage /> Kontakt
                          </div>
                        </Link>
                      </a>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/contact-us-global">
                          <div data-bs-dismiss="offcanvas">
                            <MdContactPage /> Kontakt
                          </div>
                        </Link>
                      </a>
                    </li>
                  )}

                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/annual-report">
                        <div data-bs-dismiss="offcanvas">
                          <TbReport /> Årsredovisning
                        </div>
                      </Link>
                    </a>
                  </li>

                  <br />
                  <br />
                  <br />

                  {user ? (
                    <>
                      {/* If admin is logged in, show below */}
                      {user.isAdmin ? (
                        <>
                          <li className="nav-item">
                            <a className="nav-link">
                              <Link to="/admin-panel">
                                <div data-bs-dismiss="offcanvas">
                                  <MdAdminPanelSettings /> Admin Panel
                                </div>
                              </Link>
                            </a>
                          </li>
                        </>
                      ) : (
                        /* If admin not being logged in, show below menu */
                        <>
                          {/* <li className="nav-item">
                            <a className="nav-link">
                              <Link to="/ticket-first-page">
                              <div data-bs-dismiss="offcanvas">
                                <TbReport /> Felanmälan
                              </div>  
                              </Link>
                            </a>
                          </li> */}
                        </>
                      )}
                      {/* If user is logged in, show below */}

                      <li className="nav-item">
                        <a className="nav-link">
                          <button className="btn btn-danger" onClick={onLogout}>
                            <div data-bs-dismiss="offcanvas">
                              <FaSignOutAlt /> Logga Ut
                            </div>
                          </button>
                        </a>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
