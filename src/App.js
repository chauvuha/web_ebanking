import './App.css';
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services'  component={Services} />
          <Route path='/products'  component={Products} />
          <Route path='/signup'  component={Signup} />
          <Route path='/login'  component={Login} />


        </Switch>
        <Footer />
      </div>
    </Router>

  );

}

export default App;
