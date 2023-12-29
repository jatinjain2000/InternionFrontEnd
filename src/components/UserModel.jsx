import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const UserModel = ({
  username,
  filename,
  users,
  showModal,
  handleClose,
  handleSend,
}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCheckboxChange = (userEmail) => {
    const updatedSelection = selectedUsers.includes(userEmail)
      ? selectedUsers.filter((email) => email !== userEmail)
      : [...selectedUsers, userEmail];

    setSelectedUsers(updatedSelection);
  };

  const handleSendClick = async () => {
    // console.log(selectedUsers);
    await axios.post("http://compasslite.int.cyraacs.in/api/sendprivatemail", {
      username: username,
      filename: filename,
      listUser: selectedUsers,
    });
    handleSend(selectedUsers);
    alert("Mail has been sent to selected users");
    handleClose();
  };

  return (
    <Modal  style={{width:"100rem"}} show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{  fontSize: "1.2rem" }}>
          {users.map((user) => (
            <Form.Check
              key={user.id}
              type="checkbox"
              label={user.username}
              checked={selectedUsers.includes(user.email)}
              onChange={() => handleCheckboxChange(user.email)}
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
