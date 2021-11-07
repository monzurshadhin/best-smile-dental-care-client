import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import Details from "./components/Details/Details";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home/Home";
import Register from "./components/Home/Register/Register";
import Login from "./components/Login/Login/Login";
import ManageAppointment from "./components/ManageAppointment/ManageAppointment";
import UpdateAppointment from "./components/ManageAppointment/UpdateAppointment/UpdateAppointment";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact  path='/'>
        <Home></Home>
        </Route>
        <Route exact  path='/home'>
        <Home></Home>
        </Route>
        <PrivateRoute exact  path='/details/:serviceId'>
          <Details></Details>
        </PrivateRoute>
        <PrivateRoute exact path="/appointment/:id">
          <Appointment></Appointment>
        </PrivateRoute>
        <Route exact path="/doctors">
          <Doctors></Doctors>
        </Route>
        <PrivateRoute exact path="/manageAppointment">
          <ManageAppointment></ManageAppointment>
        </PrivateRoute>
        <PrivateRoute exact path="/appointment/update/:id">
          <UpdateAppointment></UpdateAppointment>
        </PrivateRoute>
        <Route exact  path='/login'>
        <Login></Login>
        </Route>
        <Route exact  path='/register'>
          <Register></Register>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      
        
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
