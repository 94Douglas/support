import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import BackButton from "../components/BackButton";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: true,
  });

  const isNotAdmin = false;

  const { name, email, password, confirmPassword, isAdmin } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // user = user information
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    // if (isSuccess || user) {
    //   navigate("/");
    // }

    dispatch(reset);
  }, [isError, message, navigate, dispatch]);
  // }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    e.preventDefault();

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
    } else{
      const userData = {
        name,
        email,
        password,
        isAdmin
      };
      
      toast.success(`Successfully created ${formData.name}`);
      dispatch(register(userData));
      window.location.reload();
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
      <BackButton url="/admin-panel" />
        <h1>
          <FaUser /> Registrera
        </h1>
        <p></p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Ange Ditt Namn"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Ange Din Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Ange Lösenord"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Ange Lösenord Igen"
              required
            />
          </div>

          {/* <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Användare Administratör (Ja/Nej)
            </button>
            <ul class="dropdown-menu">
              <li>
                <h5 class="dropdown-item">Ja</h5>
                <input
                  type="checkbox"
                  class="checkboxCenter"
                  id="adminCheckbox"
                  name="adminCheckbox"
                  value={isAdmin}
                  onChange={onChange}
                  // onChange={onAdmin}
                />
              </li>
              <li>
                <h5 class="dropdown-item">Nej</h5>
                <input
                  type="checkbox"
                  class="checkboxCenter"
                  id="adminCheckbox"
                  name="adminCheckbox"
                  value={isNotAdmin}
                  onChange={onChange}
                />
              </li>
            </ul>
          </div> */}

          {/* <div className="form-group"></div> */}
          <div className="form-group">
            <button className="btn btn-block">Registrera</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
