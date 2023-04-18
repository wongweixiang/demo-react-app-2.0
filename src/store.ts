import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./pages/Home/reducer";
import userProfileReducer from "./pages/UserProfile/reducer";

const store = configureStore({
  reducer: {
    home: homeReducer,
    userProfile: userProfileReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
