import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>a dictionary app by chelsea hurst</h2>
          <h1 className="mb-5">WHAT DOES THAT MEAN?</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">coded by chelsea hurst</footer>
      </div>
    </div>
  );
}
