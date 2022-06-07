import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formdata, setFormdata] = useState({
    name: "",
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
          <FaUser />
          Register
        </h2>
        <p>Please Register as a User</p>
      </section>

      <section className="form">
        <form method="post">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={formdata.name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
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

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password2"
              name="password2"
              value={formdata.password2}
              placeholder="Enter your confirm password"
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
