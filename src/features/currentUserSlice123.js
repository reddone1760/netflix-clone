// import { createSlice } from "@reduxjs/toolkit";
// import db from "../firebase";

// let setCurrentUserId;

// let setCurrentUser;

// alert(current);

// let current = setCurrentUserId && setCurrentUser.user;

// db.collection("userData")
//   .doc(user.uid)
//   .collection("currentProfile")
//   .doc("current")
//   .get()
//   .then((doc) => {
//     let nowCurrent;
//     if (doc.exists) {
//       nowCurrent = doc.data();
//     }
//     setCurrentUserId(nowCurrent);
//   })
//   .catch((err) => console.log(err));

// db.collection("userData")
//   .doc(user.uid)
//   .collection("profiles")
//   .doc(current)
//   .get()
//   .then((doc) => {
//     const currentProfiles = doc.data();
//     setCurrentUser = currentProfiles;
//   })
//   .catch((err) => console.log(err));

// export const currentUserSlice = createSlice({
//   name: "currentUser",
//   initialState: {
//     currentUser: null,
//   },
//   reducers: {
//     logInCurrentUser: (state, action) => {
//       state.currentUser = action.payload;
//     },
//     logOutCurrentUser: (state) => {
//       state.currentUser = null;
//     },
//   },
// });

// export const { login, logout } = currentUserSlice.actions;

// export const selectCurrentUser = (state) => state.currentUser.currentUser;

// export default currentUserSlice.reducer;
