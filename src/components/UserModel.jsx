import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // You may need to install the react-bootstrap package

const UserModel = ({ users, showModal, handleClose, handleSend }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCheckboxChange = (userId) => {
    const updatedSelection = selectedUsers.includes(userId)
      ? selectedUsers.filter((id) => id !== userId)
      : [...selectedUsers, userId];

    setSelectedUsers(updatedSelection);
  };

  const handleSendClick = () => {
    handleSend(selectedUsers);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {users.map((user) => (
            <Form.Check
              key={user.id}
              type="checkbox"
              label={user.username}
              checked={selectedUsers.includes(user.id)}
              onChange={() => handleCheckboxChange(user.id)}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSendClick}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModel;
