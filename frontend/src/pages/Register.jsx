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
  // Form data for admin user register

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: true,
  });

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

  // OnChange data for Admin user register.
  const onChange = (e) => {
    e.preventDefault();

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // On Submit button for admin user register
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        name,
        email,
        password,
        isAdmin,
      };

      toast.success(`Successfully created ${formData.name}`);
      dispatch(register(userData));
      // window.location.reload();
      navigate("/admin-panel");
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
          <FaUser /> Registrera Administratör
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
          <div className="form-group">
            <button className="btn btn-block">Registrera Administratör</button>
          </div>
        </form>
        <br />
      </section>
    </>
  );
}

export default Register;
