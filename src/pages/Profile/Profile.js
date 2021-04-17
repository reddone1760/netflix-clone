import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import CurrentUser from "../../components/CurrentUser/CurrentUser";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../firebase";
import "./Profile.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import picturesJSON from "./PicturesJSON.js";

function Profile() {
  const user = useSelector(selectUser);

  const [showPlans, setShowPlans] = useState(false);
  const [plan, setPlan] = useState();

  const [addProfile, setAddProfile] = useState(false);
  const [addProfileName, setAddProfileName] = useState("");
  const [addProfilePic, setAddProfilePic] = useState(picturesJSON[0].url);

  const [allUsers, setAllUsers] = useState();

  let current;

  const addCurrentUser = (e) => {
    e.preventDefault();

    db.collection("userData")
      .doc(user.uid)
      .collection("currentProfile")
      .doc(`current`)
      .set({
        user: current,
      });
  };

  const addUser = (e) => {
    e.preventDefault();

    db.collection("userData")
      .doc(user.uid)
      .collection("profiles")
      .doc(`user${allUsers.profiles.length + 1}`)
      .set({
        user: `user${allUsers.profiles.length + 1}`,
        name: addProfileName,
        photoUrl: addProfilePic,
      });
  };

  const addNewPlan = (e, newPlan) => {
    e.preventDefault();

    db.collection("userData")
      .doc(user.uid)
      .collection("plan")
      .doc(`currentPlan`)
      .set({
        plan: newPlan,
      });
  };

  db.collection("userData")
    .doc(user.uid)
    .collection("profiles")
    .get()
    .then((doc) => {
      const profiles = [];
      doc.forEach((doc) => {
        profiles.push(doc.data());
      });
      setAllUsers({ profiles: profiles });
    });

  db.collection("userData")
    .doc(user.uid)
    .collection("plan")
    .doc("currentPlan")
    .get()
    .then((doc) => {
      let thisPlan;
      if (doc.exists) {
        thisPlan = doc.data();
      }
      setPlan(thisPlan.plan);
    })
    .catch((err) => console.log(err));

  return (
    <>
      {addProfile && (
        <div className="addProfile-Model">
          <div>
            <ArrowBackIcon
              onClick={() => {
                setAddProfile(!addProfile);
              }}
              className="close__btn"
            />
          </div>
          <div className="addProfile__Container">
            <h2>Add new Profile</h2>
            <h3>Name: </h3>
            <input
              required
              type="text"
              placeholder="Name"
              value={addProfileName}
              onChange={(e) => setAddProfileName(e.target.value)}
            />
            <h3>Picture: </h3>
            <div className="addPictures__Container">
              {picturesJSON.map((data) => (
                <img
                  className={addProfilePic == data.url && "addPictures__active"}
                  src={data.url}
                  onClick={() => {
                    setAddProfilePic(data.url);
                  }}
                />
              ))}
            </div>
            <button
              onClick={(e) => {
                addUser(e);
                setAddProfile(!addProfile);
              }}
            >
              Add Profile
            </button>
          </div>
        </div>
      )}
      <div className="profile">
        <Navbar />
        <div className="profile__Body">
          <h1>Edit Profile</h1>
          <div className="profile__info">
            <div className="profile__details">
              <div className="profile__userPrev">
                <CurrentUser img />
                <div className="profile__userPrevInfo">
                  <h2>
                    <span>Email: </span>
                    <span>{user.email}</span>
                  </h2>
                  <h2>
                    <span>User: </span>
                    <span>
                      <CurrentUser name />
                    </span>
                  </h2>
                  <h2>
                    <span>Plan: </span>
                    <span>{plan}</span>
                  </h2>
                </div>
              </div>

              <div className="profile__plans">
                <h3
                  onClick={() => {
                    setShowPlans(!showPlans);
                  }}
                >
                  <span>Plans (Current Plan: {plan})</span>
                  <span>
                    {showPlans ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </span>
                </h3>
                {showPlans && (
                  <>
                    <h4>Renewal date: 04/03/2021</h4>
                    <div className="plans">
                      <div className="plan standart">
                        <div className="plan__title">
                          <span>Netflix Standart</span>
                          <span>1080p</span>
                        </div>
                        <button
                          className={`plan__btn ${
                            plan === "Standart" ? "nosub" : "sub"
                          }`}
                          onClick={(e) => {
                            addNewPlan(e, "Standart");
                          }}
                        >
                          {plan === "Standart"
                            ? "Current Package"
                            : "Subscribe"}
                        </button>
                      </div>
                      <div className="plan standart">
                        <div className="plan__title">
                          <span>Netflix Basic</span>
                          <span>480p</span>
                        </div>
                        <button
                          className={`plan__btn ${
                            plan === "Basic" ? "nosub" : "sub"
                          }`}
                          onClick={(e) => {
                            addNewPlan(e, "Basic");
                          }}
                        >
                          {plan === "Basic" ? "Current Package" : "Subscribe"}
                        </button>
                      </div>
                      <div className="plan standart">
                        <div className="plan__title">
                          <span>Netflix Premium</span>
                          <span>4K+HDR</span>
                        </div>
                        <button
                          className={`plan__btn ${
                            plan === "Premium" ? "nosub" : "sub"
                          }`}
                          onClick={(e) => {
                            addNewPlan(e, "Premium");
                          }}
                        >
                          {plan === "Premium" ? "Current Package" : "Subscribe"}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="profile__profiles">
                <h3>Who's watching?</h3>
                <div className="profiles">
                  {allUsers && allUsers.profiles.length < 5 ? (
                    <>
                      {allUsers &&
                        allUsers.profiles.map((profile) => (
                          <div
                            onClick={(e) => {
                              current = profile.name;
                              addCurrentUser(e);
                            }}
                            className={`profile__user`}
                          >
                            <img src={profile.photoUrl} alt={profile.name} />
                            <h4>{profile.name}</h4>
                          </div>
                        ))}
                      <div
                        className="profile__user addUser"
                        onClick={() => {
                          setAddProfile(!addProfile);
                        }}
                      >
                        <div>
                          <AddIcon />
                        </div>
                        <h3>Add Profile</h3>
                      </div>
                    </>
                  ) : (
                    <>
                      {allUsers &&
                        allUsers.profiles.map((profile) => (
                          <div
                            onClick={(e) => {
                              current = profile.name;
                              addCurrentUser(e);
                            }}
                            className="profile__user"
                          >
                            <img src={profile.photoUrl} alt={profile.name} />
                            <h4>{profile.name}</h4>
                          </div>
                        ))}
                    </>
                  )}
                </div>
                <div className="editbtn__section">
                  <Link style={{ textDecoration: "none" }} to="/profile/manage">
                    <button className="profile__edit">
                      <EditIcon />
                      <span>Edit Profile</span>
                    </button>
                  </Link>
                </div>
              </div>

              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profile__logout"
              >
                Sing Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
