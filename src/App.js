import React, { useEffect, useState } from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/LandingScreen/Landing";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, userSlice } from "./features/userSlice";
import Profile from "./pages/Profile/Profile";
import MyList from "./pages/MyList/MyList";
import ProfileManage from "./pages/ProfileManage/ProfileManage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/browse">
              <HomeScreen />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/profile/manage">
              <ProfileManage />
            </Route>
            <Route exact path="/my-list">
              <MyList />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
