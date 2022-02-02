// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";

// function App() {
//   return <div className="App">
//   <Register />;
  
//   </div>
// }

// above is what previously worked before we started to work on below!
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";
// // import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path ="/">
//         <Home  />
//         </Route>
//         <Route exact path ="/Login">
//         <Login  />
//         </Route>
//         <Route exact path ="/Register">
//         <Register  />
//         </Route>
//         <Route exact path ="/profile/:username">
//         <Profile />
//         </Route>
//       </Switch>
//     </Router>
//     );
// }

// export default App;


/**try again */
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;