import { configureStore, createSlice } from '@reduxjs/toolkit';
import { authUser, setChat } from './operations';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    user: { isLoggedin: false },
    chat: {},
  },
  extraReducers: {
    [authUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.user.isLoggedin = true;
    },
    [setChat]: (state, action) => {
      state.chat = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, chatSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: { ignoreActions: true } });
  },
});

export const persistor = persistStore(store);
