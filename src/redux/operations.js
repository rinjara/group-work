import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, database } from 'services/firebase.config';
import { ref, onValue, set } from 'firebase/database';

export const authUser = createAsyncThunk('chat/auth', async (_, thunkAPI) => {
  const provider = new GoogleAuthProvider();
  try {
    const {
      user: { displayName, email },
    } = await signInWithPopup(auth, provider);
    return { Name: displayName, Email: email };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const setChat = createAction('chat/setChat');

export const getChat = createAsyncThunk('chat/start', async (_, thunkAPI) => {
  try {
    const starCountRef = ref(database, 'chat/');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      thunkAPI.dispatch(setChat(data));
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message, thunkAPI) => {
    try {
      const id = Number(Math.random().toFixed(5)) * 100000;
      const { Name, Email } = thunkAPI.getState().user;

      const res = await set(ref(database, 'chat/' + id), {
        username: Name,
        email: Email,
        message,
      });
      console.log(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
