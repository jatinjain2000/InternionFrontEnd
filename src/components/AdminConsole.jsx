import React, { useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import axios from "axios";

function UserConsole() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getallusers"
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Admin Dashboard
      </h2>
      <div >
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
                <u>Users</u>
              </th>
              <th scope="col">
                <u>Status</u>
              </th>

              <th scope="col" style={{ paddingLeft: "1rem" }}>
                <u>Form Name</u>
              </th>
              <th scope="col" style={{ paddingLeft: "1rem" }}>
                <u>File Name</u>
              </th>
              <th scope="col" style={{ paddingLeft: "1rem" }}>
                <u>Permissions</u>
              </th>
            </tr>
          </MDBTableHead>
          {data.map((item, id) => {
            return (
              <Box
                key={item.id}
                email={item.email}
                filename={item.filename}
                permission={item.permission}
              />
            );
          })}
        </MDBTable>
      </div>
    </>
  );
}

const Box = ({ email, filename, permission }) => {
  const approve = async () => {
    await axios.get(`http://localhost:8080/api/grantpermission/${filename}`);
  };
  return (
    <>
      <MDBTableBody>
        <tr style={{ textAlign: "center" }}>
          <td>
            <p className="text mb-1">{email}</p>
          </td>
          <td>
            <MDBBtn
              className="text mb-1"
              style={{ fontSize: "1.2rem" }}
              color="link"
              rounded
            >
              <MDBBadge
                pill
                class={
                  permission == 0
                    ? "badge badge-warning"
                    : "badge badge-success"
                }
              >
                {permission == 0 ? "Pending" : "Approved"}
              </MDBBadge>
            </MDBBtn>
          </td>

          <td>
            <p className="text mb-1">Residence Form</p>
          </td>
          <td>
            <p className="text mb-1">{filename}</p>
          </td>
          <td>
            <div>
              <MDBBtn
                className="text mb-1"
                style={{ fontSize: "1rem" }}
                color="link"
                onClick={approve}
                rounded
              >
                Approve
              </MDBBtn>
            </div>
          </td>
        </tr>
      </MDBTableBody>
    </>
  );
};

export default UserConsole;
