import React, { useState } from "react";
import db from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function CurrentUser({ nav, img, name, userId }) {
  const user = useSelector(selectUser);

  const [currentUserId, setCurrentUserId] = useState();

  const [currentUser, setCurrentUser] = useState();

  let current = currentUserId && currentUserId.user;

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
  return (
    <>
      {img && (
        <img
          className={nav && "nav__avatar"}
          src={currentUser && currentUser.photoUrl}
          alt={currentUser && currentUser.name}
        ></img>
      )}
      {name && <span>{currentUser && currentUser.name}</span>}
    </>
  );
}

export default CurrentUser;
