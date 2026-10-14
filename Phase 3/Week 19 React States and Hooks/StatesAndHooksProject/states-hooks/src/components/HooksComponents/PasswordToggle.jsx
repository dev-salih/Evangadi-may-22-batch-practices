import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "./passwordToggle.css";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`username : ${username} & password : ${password}`);
    // console.log("Form submitted with", { username, password });
  };

  return (
    <>
      <div className="login-wrapper">
        <h2>Log in Form</h2>
        <div className="login-card">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="user">USERNAME</label>
              <input
                type="text"
                placeholder="Enter username"
                id="user"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  id="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="login-btn">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasswordToggle;
