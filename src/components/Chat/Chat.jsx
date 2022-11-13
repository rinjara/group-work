import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getChat } from 'redux/operations';

const Chat = () => {
  const dispatch = useDispatch();
  const {
    chat,
    user: { Email },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getChat());
  }, [dispatch]);

  console.log(chat);
  return (
    <ListGroup>
      {Object.entries(chat).map(message => (
        <ListGroup.Item key={message[0]}>
          <p
            style={{ textAlign: message[1].email === Email ? 'right' : 'left' }}
          >{`${message[1].username}: ${message[1].message}`}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Chat;
