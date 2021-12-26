import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" img-fluid alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://brave-meninsky-cd508d.netlify.app/about.html"
            target="_blank"
            rel="noreferrer"
          >
            Amanda Chan{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/kiwicubex/dictionary-project2"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
