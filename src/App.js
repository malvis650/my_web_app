import  Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <header className="content">
        <h1>My Movie App</h1>
        <p>Welcome to my movie app, where you can find your favorite action movies!</p>
        <p>Click on the links above to navigate through the app.</p>
        <p>Enjoy your stay!</p>
        <p>Here are some of the movies you can explore:</p>
        <Switch>
          <Route path="/"/>
          <Home/>
          <Route/>
          <Route path="/blogs/:id"/>
          <Home/>
          <Route/>
          <Route path="/home"/>
          <create/>
        
        </Switch>
      </header>
    </div>
            </Router>
  );
}

export default App;
