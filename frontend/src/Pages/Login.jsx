import { useState, useEffect } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";

const Register = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    passwordconfirm: "",
  });

  const onChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
        <form method="post">
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

export default Register;
