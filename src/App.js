import  Home from "./Home";
import  Contact  from "./Contact";
import  Services  from "./Services";
import  About  from "./About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react</h1>
        <Home/>
        <Contact/>
        <Services/>
        <About/>
      </header>
    </div>
  );
}

export default App;
