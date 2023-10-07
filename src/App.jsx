import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./continuous_improvement_image.jpg";
import user from "./user.png";
import man from "./assets/logic.svg";
// import personalAssistant from "./chatbot.html";

// import user from "../public/user.png";

const App = () => {
  const navigate = useNavigate();

  // const location = useLocation();
  const navigateToVideoCall = () => {
    navigate("/join-room");
  };

  const navigateToSkills = () => {
    navigate("/skills");
  };

  const navigateToBlogs = () => {
    navigate("/blogs");
  };

  const navigateToLogin = () => {
    window.open("http://localhost:3000");
  };

  const navigateToChatbot = () => {
    window.open("../chatbot.html", "_blank");
  };
  return (
    <>
      <div className="gradient-div-1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img
              src={logo}
              width={37}
              height={37}
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={navigateToSkills}>
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={navigateToBlogs}>
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={navigateToVideoCall}>
                    Talk to a Mentor
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" onClick={navigateToChatbot}>
                    Chat Assistant
                  </a>
                </li>

                {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
              </ul>
            </div>
            {/* <li className="nav-item">
              <a className="nav-link" onClick={navigateToLogin}>
                Login & Register
              </a>
            </li> */}
            <img src={user} width={40} height={40} />
          </div>
        </nav>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div>
            <img src={man} width={400} height={400} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.8rem",
              height: "100%",
              marginTop: "70px",
            }}
          >
            {/* <h1 style={{ fontWeight: "600" }}>A New Chapter Awaits.</h1>
          <h3> Embrace Learning, Empower Change</h3> */}

            <h1 style={{ fontWeight: "600" }}>
              Acquire skills, read blogs, and seek professional help
            </h1>
            <h3>All at one place.</h3>
            <div className="getting-started" onClick={navigateToSkills}>
              Upskill Now!
            </div>
          </div>
        </div>

        {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}
      </div>
    </>
  );
};

export default App;
