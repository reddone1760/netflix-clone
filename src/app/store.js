import { configureStore } from "@reduxjs/toolkit";
// import { profilesSlice } from "../features/profileSlice";
import userReducer from "../features/userSlice";
// import currentUserReducer from "../features/currentUserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    // currentUser: currentUserReducer,
  },
});
