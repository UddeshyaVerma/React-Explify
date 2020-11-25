import React, { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import NavBars from "./components/NavBars";
import IntroSection from "./components/IntroSection";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Footers from "./components/Footers";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import StudentList from "./components/StudentList";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import GetStarted from "./components/GetStarted";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";
import { initialState, reducer } from "./components/reducers/UserReducer";

export const usercontext = createContext();
const Homepage = () => {
  return (
    <div className="App">
      <IntroSection />
      <main id="main">
        <AboutUs />
        <WhyUs />
        <Features />
        <Testimonial />
        <Team />
        <Footers />
      </main>
    </div>
  );
};
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(usercontext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/signin");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/dashboard">
        <AdminDashboard />
      </Route>
      <Route exact path="/dashboard/students">
        <StudentList />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/GetStarted">
        <GetStarted />
      </Route>
      <Route exact path="/Profile">
        <Profile />
      </Route>
      <Route exact path="/UpdateProfile">
        <UpdateProfile />
      </Route>
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <usercontext.Provider value={{ state, dispatch }}>
    <Router>
      <NavBars />
      <Routing/>
    </Router>
    </usercontext.Provider>
  );
}

export default App;
