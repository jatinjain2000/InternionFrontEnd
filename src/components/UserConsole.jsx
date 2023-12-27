import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserModel from "./UserModel";

function UserConsole() {
  const [data, setData] = useState([]);
  const email = "negorib786@ubinert.com";
  const [showModal, setShowModal] = useState(false);
  const[users,setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/getfilebyemail/${email}`
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getdata"
        );
        setUsers(response.data);
        
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSendPDF = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendMail = (selectedUsers) => {
    // Implement logic to send mail to selected users
    console.log("Sending mail to selected users:", selectedUsers);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>User Dashboard</h2>

      <MDBTable
        style={{
          marginTop: "2rem",
          width: "80%",
          marginLeft: "13rem",
          fontSize: "1.2rem",
        }}
        align="middle"
      >
        <MDBTableHead>
          <tr style={{ textAlign: "center" }}>
            <th scope="col">
              <u>FORM SUBMITTED</u>
            </th>
            <th scope="col">
              <u>FILE NAME </u>
            </th>
            <th scope="col">
              <u>PERMISSION STATUS</u>
            </th>
            <th scope="col" style={{ paddingLeft: "3rem" }}>
              <u>USER ACTIONS</u>
            </th>
          </tr>
        </MDBTableHead>

        {data.map((item, id) => {
          return (
             <Box
            key={item.id}
            username={item.username}
            filename={item.filename}
            permission={item.permission}
            handleSendPDF={handleSendPDF}
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            handleSendMail={handleSendMail}
            users = {users}
          />
          );
        })}
        {/* "id": 9,
        "count": 2,
        "username": "jatin",
        "filename": "jatin-2",
        "permission": false,
        "email": "negorib786@ubinert.com" */}
      </MDBTable>
    </>
  );
}

const Box = ({ username, filename, permission, handleSendPDF, showModal, handleCloseModal, handleSendMail,users }) => {
  return (
    <>
      <MDBTableBody style={{ textAlign: "center" }}>
        <tr>
          <td>
            <p className="text mb-1">Residence Form</p>
          </td>
          <td>
            <p className="text mb-1">{filename}</p>
          </td>
          <td>
            <MDBBtn
              className="text mb-1"
              style={{ fontSize: "1.2rem" }}
              color="link"
              rounded
            >
              <MDBBadge pill>
                {permission == 0 ? "Pending" : "Approved"}
              </MDBBadge>
            </MDBBtn>
            {/* <MDBBtn
              className="text mb-1"
              style={{ fontSize: "1.2rem" }}
              color="link"
              rounded
            >
              <MDBBadge pill>Pending</MDBBadge>
            </MDBBtn> */}
          </td>

          <td>
            {permission == 0 ? (
              <>
                <MDBBtn
                  className="text mb-1"
                  style={{ fontSize: "1rem" }}
                  color="link"
                  rounded
                >
                  Request Permission
                </MDBBtn>
              </>
            ) : (
              <>
                <div>
                  <MDBBtn
                    className="text mb-1"
                    style={{ fontSize: "1rem" }}
                    color="link"
                    rounded
                  >
                    Download
                  </MDBBtn>
                  <MDBBtn
                    className="text mb-1"
                    style={{ fontSize: "1rem" }}
                    color="link"
                    onClick={handleSendPDF}
                    rounded
                  >
                    Send PDF
                  </MDBBtn>
                  <UserModel
                    users={users}
                    showModal={showModal}
                    handleClose={handleCloseModal}
                    handleSend={handleSendMail}
                  />
                  <MDBBtn
                    className="text mb-1"
                    style={{ fontSize: "1rem" }}
                    color="link"
                    rounded
                  >
                    Drive Upload
                  </MDBBtn>
                </div>
              </>
            )}
          </td>
        </tr>
      </MDBTableBody>
    </>
  );
};

export default UserConsole;
