import { useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaTicketAlt } from "react-icons/fa";
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

  // const adminSignedIn = () => {
  //   if(user.isAdmin === true){
  //     return 'Admin'
  //   } else {
  //     return 'Normal'
  //   }
  // }

  // const openModal = () => setModalIsOpen(true);
  // const closeModal = () => setModalIsOpen(false);

  return (
    <header className="headerr">
      <div className="logo">
        <Link to="/">Olovs Hage - Samfällighet</Link>
      </div>
      {/* <ul>
        {user ? (
          <li>
            Inloggad som: {user.name}
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Logga In
              </Link>
            </li>
          </>
        )}
      </ul> */}

      <nav class="navbar fixed-right">
        <div class="container">
          <a class="navbar-brand">Meny</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Meny
              </h5>
              <button
                type="button"
                class="btn-close"
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
                        <FaSignInAlt /> Logga In
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div class="offcanvas-body">
              <div className="">
                <ul class="border border-grey navbar-nav justify-content-end flex-grow-1 pe-3 ">
                  <li className="nav-item ">
                    <a class="nav-link ">
                      <Link to="/">
                        <MdHome /> Hem
                      </Link>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a class="nav-link">
                      <Link to="/about-us">
                        <GrGroup /> Om Oss
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a class="nav-link">
                      <Link to="/contact-us">
                        <MdContactPage /> Kontakt
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a class="nav-link">
                      <Link to="/annual-report">
                        <TbReport /> Årsredovisning
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
                            <a class="nav-link">
                              <Link to="/admin-panel">
                                <MdAdminPanelSettings /> Admin Panel
                              </Link>
                            </a>
                          </li>
                        </>
                      ) : (
                        /* If admin not being logged in, show below menu */
                        <>
                          {/* <li className="nav-item">
                            <a class="nav-link">
                              <Link to="/ticket-first-page">
                                <TbReport /> Felanmälan
                              </Link>
                            </a>
                          </li> */}
                        </>
                      )}
                      {/* If user is logged in, show below */}

                      <li className="nav-item">
                        <a class="nav-link">
                          <button className="btn btn-danger" onClick={onLogout}>
                            <FaSignOutAlt /> Logga Ut
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
      {/* <li> */}
      {/* <BsArrowBarDown /> */}
      {/* </li> */}
    </header>
  );
}

export default Header;
