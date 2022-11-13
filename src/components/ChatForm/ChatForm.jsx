import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'redux/operations';

const ChatForm = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(sendMessage(e.currentTarget.elements.input.value));
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Your message</Form.Label>
        <Form.Control type="text" placeholder="Message" id="input" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ChatForm;
