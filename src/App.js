import Dictionary from "./Dictionary.js";
import "./App.css";
import camping from "./camping.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>a dictionary app by chelsea hurst</h2>
          <h1 className="mb-4">WHAT DOES THAT MEAN?</h1>
          <img
            src={camping}
            width="830px"
            alt="camping"
            className="img-fluid mb-5"
          ></img>
        </header>
        <main>
          <Dictionary defaultKeyword="royal" />
        </main>
        <footer className="text-center">
          this project was coded by chelsea hurst and is{" "}
          <a
            href="https://github.com/churst73/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>
        </footer>
      </div>
    </div>
  );
}
