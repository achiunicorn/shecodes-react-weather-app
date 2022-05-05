import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Coded by Amanda Chiu.{" "}
          <a
            href="https://github.com/achiunicorn/shecodes-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
