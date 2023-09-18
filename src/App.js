import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm";
function App() {
  const LoanFormStyle = {
    backgroundColor: "blue",
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={LoanFormStyle}>
          <LoanForm></LoanForm>
        </div>
      </header>
    </div>
  );
}

export default App;
