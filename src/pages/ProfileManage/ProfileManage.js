import React, { useState } from "react";
import "./ProfileManage.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";
import picturesJSON from "../Profile/PicturesJSON.js";
import EditIcon from "@material-ui/icons/Edit";

function ProfileManage() {
  const user = useSelector(selectUser);

  let currentEdit;

  const [currentUserId, setCurrentUserId] = useState();

  const [currentUser, setCurrentUser] = useState();

  let current = currentUserId && currentUserId.user;

  const [showEdit, setShowEdit] = useState(false);

  const [addProfileName, setAddProfileName] = useState("");
  const [addProfilePic, setAddProfilePic] = useState(picturesJSON[0].url);

  const [allUsers, setAllUsers] = useState();

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
    .collection("currentProfile")
    .doc("current")
    .get()
    .then((doc) => {
      let nowCurrent;
      if (doc.exists) {
        nowCurrent = doc.data();
      }
      setCurrentUserId(nowCurrent);
    })
    .catch((err) => console.log(err));

  db.collection("userData")
    .doc(user.uid)
    .collection("profiles")
    .doc(current)
    .get()
    .then((doc) => {
      const currentProfiles = doc.data();
      setCurrentUser(currentProfiles);
    })
    .catch((err) => console.log(err));

  db.collection("userData")
    .doc(user.uid)
    .collection("profiles")
    .doc(currentEdit)
    .get()
    .then((doc) => {
      const currentProfiles = doc.data();
      setCurrentUser(currentProfiles);
    })
    .catch((err) => console.log(err));

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
      {showEdit ? (
        <div>
          {current}
          {console.log(current)}
        </div>
      ) : (
        <div className="choose__profiles">
          <h3>Choose a Profiele</h3>
          <div className="profiles">
            {allUsers &&
              allUsers.profiles.map((profile) => (
                <div
                  className="choose__user"
                  onClick={() => {
                    setShowEdit(true);
                    alert(current);
                    currentEdit = profile.user;
                  }}
                >
                  <img src={profile.photoUrl} alt={profile.name} />
                  <span className="edit__prev">
                    <EditIcon className="edit__prevIcon" />
                  </span>
                  <h4>{profile.name}</h4>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileManage;
