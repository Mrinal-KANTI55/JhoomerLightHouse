import './App.css';
import AuthProvider from './Context/AuthProvider';
import Registration from './Pages/LogIn/Registration/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminDeshboard from './Pages/DeshBoard/AdminDeshboard/AdminDeshboard';
import CustomerDeshboard from './Pages/DeshBoard/CustomerDeshboard/CustomerDeshboard';
import Header from './Pages/Home/Header/Header';
import SellingProduct from './Pages/SellingProduct/SellingProduct';
import SelectProduct from './Pages/SellingProduct/SelectProduct/SelectProduct';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import LogIn from './Pages/LogIn/LogIn';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/SellingProduct">
              <SellingProduct />
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
            <Route path="/LogIn">
              <LogIn />
            </Route>
            <PrivateRoute path='/SelectProduct/:productId' >
              <SelectProduct></SelectProduct>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
