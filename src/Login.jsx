import "./App.css";
// import { useNavigate } from "react-router-dom";
import logo from "./continuous_improvement_image.jpg";

// import user from "../public/user.png";

const Login = () => {
  //   const navigate = useNavigate();

  // const location = useLocation();

  const navigateToLogin = () => {
    window.open("http://localhost:3000/login", "_self");
  };
  return (
    <>
      <div className="gradient-div-1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img
              src={logo}
              width={55}
              height={55}
              style={{ marginRight: "8px", borderRadius: "50%" }}
            />
            <a className="navbar-brand" href="#">
              ReformEd
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <li className="nav-item">
              <a className="nav-link" onClick={navigateToLogin}>
                Login/Register
              </a>
            </li>
            {/* <img src="user.png" /> */}
          </div>
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0.8rem",
            height: "80%",
          }}
        >
          <h1 style={{ fontWeight: "600" }}>A New Chapter Awaits.</h1>
          <h3> Embrace Learning, Empower Change</h3>
          <div className="getting-started" onClick={navigateToLogin}>
            Get Started
          </div>
        </div>

        {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}
      </div>
    </>
  );
};

export default Login;
