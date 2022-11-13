import AuthButton from 'components/AuthButton/AuthButton';
import Chat from 'components/Chat/Chat';
import ChatForm from 'components/ChatForm/ChatForm';
import React from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const { isLoggedin } = useSelector(state => state.user);
  return (
    <div>
      {!isLoggedin ? (
        <AuthButton />
      ) : (
        <div>
          <ChatForm />
          <Chat />
        </div>
      )}
    </div>
  );
};

export default MainPage;
