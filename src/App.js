import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
// import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//  "pk_live_51JGEanEqMseiMjRag4zR6xpCBlZbnnNVPbEzCJH5KlF8JCzplsVDWkWKr0KEUJ8DN0SNpwmdYj05aq42fYr0Q8Pw00pCMoQMvy"
// );

function App() {
 const [{}, dispatch] = useStateValue();

 useEffect(() => {
  // Will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
   console.log("THE USER IS >>> ", authUser);

   if (authUser) {
    // The user just logged in / the user logged in
    dispatch({
     type: "SET_USER",
     user: authUser,
    });
   } else {
    // The user is logged out
    dispatch({
     type: "SET_USER",
     user: null,
    });
   }
  });
 }, []);

 return (
  //  BEM
  <Router>
   <div className='App'>
    <Switch>
     <Route path='/orders'>
      <Header />
      <Orders />
     </Route>

     <Route path='/login'>
      <Login />
     </Route>

     <Route path='/checkout'>
      <Header />
      <Checkout />
     </Route>

     <Route path='/payment'>
      <Header />
      {/* <Elements stripe={promise}>
       <Payment />
      </Elements> */}
     </Route>

     <Route path='/'>
      <Header />
      <Home />
     </Route>
    </Switch>
   </div>
  </Router>
 );
}

export default App;
