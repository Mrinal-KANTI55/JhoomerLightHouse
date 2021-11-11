import './App.css';
import AuthProvider from './Context/AuthProvider';
import LogIn from './Pages/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminDeshboard from './Pages/DeshBoard/AdminDeshboard/AdminDeshboard';
import CustomerDeshboard from './Pages/DeshBoard/CustomerDeshboard/CustomerDeshboard';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/LogIn">
              <LogIn />
            </Route>
            <Route path="/Registration">
              <Registration />
            </Route>
            <Route path="/AdminDeshboard">
              <AdminDeshboard />
            </Route>
            <Route path="/CustomerDeshboard">
              <CustomerDeshboard />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      {/* <LogIn></LogIn>
      <Registration></Registration> */}
    </div>
  );
}

export default App;
