import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./components/aboutus";
import Home from "./components/home";
import Contact from "./components/contact";
import Profile from "./components/profile";
function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              FaShIoN mArT
            </a>
            <button
            class="navbar-toggler"
            type="button"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/home" className="nav-link active">
                    
                    HOME

                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" className="nav-link active">
                    
                    ABOUT

                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/ContactUs" className="nav-link active">
                    
                    CONTACT

                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Profile" className="nav-link active">
                    
                    SALES

                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            
            <About />

          </Route>
          <Route path="/home">
            
            <Home />

          </Route>
          <Route path="/ContactUs">
            
            <Contact />

          </Route>
          <Route path="/Profile">
            
            <Profile />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;