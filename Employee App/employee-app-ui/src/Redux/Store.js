import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../Redux/Reducers/RootReducer";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {
    user: null,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
