import logo from "./logo.svg";
import repair from "./assets/icons/repair.png";
import "./App.css";
import { MarkList } from "./components/MarkList";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent";
import { ClickCounter } from "./components/ClickCounter";
import { Clock } from "./components/Clock";
import { NameForm } from "./components/NameForm";
import { Icon } from "./components/Icon";
import { iconTypes } from "./constants/icons";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {<img src={repair} className="Repair-logo" alt="logo" />}
        <Clock />
        <Button className="primaryBtn" iconType={iconTypes.plus}>
          first
        </Button>
        <Button className="secondaryBtn" size="small" color="primary">
          second
        </Button>
        <MarkList />
        <ClassBasedComponent />
        <FunctionalBasedComponent />
        <ClickCounter increment="1" />
        <NameForm />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
