import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (user || isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, isLoading, message, user, dispatch, navigate]);

  const onChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="container">
      <section className="heading">
        <h2>
          <FaSignInAlt />
          Log-in
        </h2>
        <p>Please Login as a User</p>
      </section>

      <section className="form">
        <form method="post" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={formdata.password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-control">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
