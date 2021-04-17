import React, { useRef, useState } from "react";
import db, { auth } from "../../firebase";
import "./Login.css";

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [plan, setPlan] = useState("Standart");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        db.collection("userData")
          .doc(authUser.user.uid)
          .collection("profiles")
          .doc("user1")
          .set({
            user: "user1",
            name: nameRef.current.value,
            photoUrl:
              "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",
          });
        db.collection("userData")
          .doc(authUser.user.uid)
          .collection("currentProfile")
          .doc(`current`)
          .set({
            user: "user1",
          });
        db.collection("userData")
          .doc(authUser.user.uid)
          .collection("plan")
          .doc(`currentPlan`)
          .set({
            plan: plan,
          });
      })
      .catch((err) => console.log(err.message));
  };

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      {!isLogged ? (
        <div className="Login__Screen">
          <form>
            <h1>Sign in</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={nameRef} type="text" placeholder="Name" />
            <input ref={passwordRef} type="password" placeholder="Password" />

            <h3>Plans:</h3>

            <div className="planRadio">
              <div className="planRadio__title">
                <span className="planRadio__titleBold">Netflix Basic</span>
                <span className="planRadio__titleSub">480p</span>
              </div>
              <button
                className={`plan__btn ${plan === "Basic" ? "nosub" : "sub"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setPlan("Basic");
                }}
              >
                {plan === "Basic" ? "Current Package" : "Subscribe"}
              </button>
            </div>
            <div className="planRadio">
              <div className="planRadio__title">
                <span className="planRadio__titleBold">Netflix Standart</span>
                <span className="planRadio__titleSub">1080p</span>
              </div>
              <button
                className={`plan__btn ${plan === "Standart" ? "nosub" : "sub"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setPlan("Standart");
                }}
              >
                {plan === "Standart" ? "Current Package" : "Subscribe"}
              </button>
            </div>
            <div className="planRadio">
              <div className="planRadio__title">
                <span className="planRadio__titleBold">Netflix Premium</span>
                <span className="planRadio__titleSub">4K+HDR</span>
              </div>
              <button
                className={`plan__btn ${plan === "Premium" ? "nosub" : "sub"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setPlan("Premium");
                }}
              >
                {plan === "Premium" ? "Current Package" : "Subscribe"}
              </button>
            </div>
            <button type="submit" onClick={register}>
              Sign in
            </button>
            <h4>
              <span className="login__Screen__grey">
                Already have an accout?
              </span>
              <span
                onClick={() => {
                  setIsLogged(!isLogged);
                }}
                className="login__Screen__link"
              >
                Log in.
              </span>
            </h4>
          </form>
        </div>
      ) : (
        <div className="Login__Screen">
          <form>
            <h1>Log in</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={signin}>
              Log in
            </button>

            <h4>
              <span className="login__Screen__grey">New to Netflix?</span>
              <span
                onClick={() => {
                  setIsLogged(!isLogged);
                }}
                className="login__Screen__link"
              >
                Sign Up now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
