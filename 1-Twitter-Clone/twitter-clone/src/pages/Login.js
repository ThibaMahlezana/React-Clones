import { FaTwitter } from "react-icons/fa";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="login-box">
          <FaTwitter style={{ color: "#1da1f2", fontSize: "50px" }} />
          <h1>Log in to Twitter</h1>
          <input type="text" placeholder="Phone, email, or username" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-login">Log in</button>
          <a href="#">Forgot password? </a> <a href="#">Sign up for Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
