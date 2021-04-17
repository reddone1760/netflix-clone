import React, { useState } from "react";
import "./Accounts.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";
import picturesJSON from "../Profile/PicturesJSON.js";

function Accounts({ onChange }) {
  const user = useSelector(selectUser);

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
        name: addProfileName,
        photoUrl: addProfilePic,
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
    })
    .catch((err) => console.log(err));

  return (
    <>
      <div className="choose__profiles">
        <h3>Who's watching?</h3>
        <div className="profiles">
          {allUsers &&
            allUsers.profiles.map((profile) => (
              <div
                className="choose__user"
                onClick={(e) => {
                  onChange();
                  current = profile.user;
                  addCurrentUser(e);
                }}
              >
                <img src={profile.photoUrl} alt={profile.name} />
                <h4>{profile.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Accounts;
