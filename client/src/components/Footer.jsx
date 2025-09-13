import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div className="logo">
          <Link to="/" className="navlogo">
            <img src="/logo.png" alt="HireElite Logo" />
          </Link>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Mumbai Maharashtra India</li>
            <li>
              <a href="mailto:captsachin8898@gmail.com">
                captsachin8898@gmail.com
              </a>
            </li>

            <li>+91 8828255706</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"https://github.com/dev-SachinPrajapati"}>
                <span>
                  <FaGithub />
                </span>

                <span>Github</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/prajapati_sachin.in/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/sachin-prajapati-it/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2025. All Rights Reserved By HireElite
      </div>
    </>
  );
};

export default Footer;
