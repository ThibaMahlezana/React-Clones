import { FontAwsome } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import background from "../assets/bg.png";

function Register() {
  return (
    <div className="register">
      <div className="row">
        <div
          className="col-6 register-bg"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <FaTwitter />
        </div>
        <div className="col-6">
          <div className="content">
            <FaTwitter style={{ color: "#1DA1F2", marginBottom: "50px" }} />
            <div className="heading">Happening now</div>
            <div className="sub-heading">Join Twitter today.</div>
            <button
              className="btn"
              style={{ background: "#1DA1F2", color: "#FFF" }}
            >
              Sign up
            </button>
            <button className="btn">Log in</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <a href="#">About</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Ads info</a>
        <a href="#">Blog</a>
        <a href="#">Status</a>
        <a href="#">Careers</a>
        <a href="#">Brand Resources</a>
        <a href="#">Advertising</a>
        <a href="#">Marketing</a>
        <a href="#">Twitter for Business</a>
        <a href="#">Developers</a>
        <a href="#">Directory</a>
        <a href="#">Settings</a>
        <a>© 2021 Twitter, Inc.</a>
      </div>
    </div>
  );
}

export default Register;
