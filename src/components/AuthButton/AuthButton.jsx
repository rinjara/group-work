import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from 'redux/operations';

const AuthButton = () => {
  const dispatch = useDispatch();
  return (
    <Button type="button" onClick={() => dispatch(authUser())}>
      AuthButton
    </Button>
  );
};

export default AuthButton;
