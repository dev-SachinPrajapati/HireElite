// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// const Navbar = () => {

//   const [show, setShow] = useState(false);
//   const { isAuthenticated } = useSelector((state) => state.user);

//   return (
//     <>
//       <nav className={show ? "navbar show_navbar" : "navbar"}>
//         <div className="logo">
//           {/* <img src="/logo.png" alt="logo" /> */}
//           <h2>HireElite</h2>
//         </div>
//         <div className="links">
//           <ul>
//             <li>
//               <Link to={"/"} onClick={() => setShow(!show)}>
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link to={"/jobs"} onClick={() => setShow(!show)}>
//                 JOBS
//               </Link>
//             </li>
//             {isAuthenticated ? (
//               <li>
//                 <Link to={"/dashboard"} onClick={() => setShow(!show)}>
//                   DASHBOARD
//                 </Link>
//               </li>
//             ) : (
//               <li>
//                 <Link to={"/login"} onClick={() => setShow(!show)}>
//                   LOGIN
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//         <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  const location = useLocation(); // Get current route

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <Link to="/" className="navlogo">
            <h2>HireElite</h2>
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={() => setShow(!show)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={location.pathname === "/jobs" ? "active" : ""}
                onClick={() => setShow(!show)}
              >
                JOBS
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link
                  to="/dashboard"
                  className={location.pathname === "/dashboard" ? "active" : ""}
                  onClick={() => setShow(!show)}
                >
                  DASHBOARD
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className={location.pathname === "/login" ? "active" : ""}
                  onClick={() => setShow(!show)}
                >
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
