import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {ReactComponent as Avatar} from "./images/avatar.svg";
import {ReactComponent as Setup} from "./images/setup.svg";

function App() {
  return (
    <div className="App">
      <div className="home">
        <nav>
          <Navbar />
        </nav>
        <main className="profile">
          <div className="left">
            <div className="fname">ARYAN</div>
            <div className="lname">KUMAR</div>
            <div className="typing">FULL STACK WEB DEVELOPER</div>
            <button>RESUME</button>
          </div>
          <div className="right">
            <Avatar />
          </div>
        </main>
        <div className="svg">
          <Setup />
        </div>
      </div>
    </div>
  );
}

export default App;
