import React from "react";
import facebook_logo from "../assets/Facebook-Logo.png";

function Login() {
  return (
    <div>
      <main>
        <div className="login">
          <div className="login-body">
            <img className="logo-img" src={facebook_logo} />
            <div className="login-text">
              Facebook helps you connect and share with the people in your life.
            </div>
          </div>
        </div>

        <div className="form-container">
          <form>
            <input
              type="email"
              placeholder="Email address or phone number"
              autoFocus="autofocus"
              required
            />
            <input
              type="password"
              placeholder="password"
              autoFocus="autofocus"
              required
            />
            <input className="login-btn" type="submit" value="Log In" />
            <a className="link" href="">
              Forgotten password?
            </a>
            <hr />
            <button className="register-btn" type="submit">
              Create New Acount
            </button>
          </form>
          <div className="create-page">
            <a href="">Create a Page</a> for a celebrity, band or business.
          </div>
        </div>
      </main>
      <div className="footer">
        <div className="footer-sec">
          <ul>
            <li>English (UK)</li>
            <li>
              <a href="">हिन्दी</a>
            </li>
            <li>
              <a href="">ગુજરાતી</a>
            </li>
            <li>
              <a href="">मराठी</a>
            </li>
            <li>
              <a href="">اردو</a>
            </li>
            <li>
              <a href="">മലയാളം</a>
            </li>
            <li>
              <a href="">বাংলা</a>
            </li>
            <li>
              <a href="">తెలుగు</a>
            </li>
            <li>
              <a href="">தமிழ்</a>
            </li>
            <li>
              <a href="">ਪੰਜਾਬੀ</a>
            </li>
            <li>
              <a href="">Español</a>
            </li>
          </ul>
          <div className="line"></div>
          <ul>
            <li>
              <a href="">Sign Up</a>
            </li>
            <li>
              <a href="">Log In</a>
            </li>
            <li>
              <a href="">Messenger</a>
            </li>
            <li>
              <a href="">Facebook Lite</a>{" "}
            </li>
            <li>
              <a href=""> Watch </a>{" "}
            </li>
            <li>
              <a href="">People</a>{" "}
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Page categories</a>
            </li>
            <li>
              <a href="">Places</a>
            </li>
            <li>
              <a href="">Games</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">Marketplace</a>
            </li>
            <li>
              <a href="">Facebook Pay</a>
            </li>
            <li>
              <a href="">Groups</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Oculus</a>
            </li>
            <li>
              <a href="">Portal</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Local</a>
            </li>
            <li>
              <a href="">Fundraisers</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Voting Information Centre</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Create ad</a>
            </li>
            <li>
              <a href="">Create Page</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">AdChoices</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
            <li>
              <a href="">Activity log</a>
            </li>
          </ul>
          <div class="copyright">
            <div>
              <span> Facebook © 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
