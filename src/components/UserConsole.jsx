import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
 
function UserConsole() {
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
          <tr>
            <th scope="col">
              <u>FORM SUBMITTED</u>
            </th>
            <th scope="col">
              <u>PERMISSION STATUS</u>
            </th>
            <th scope="col" style={{ paddingLeft: "10rem" }}>
              <u>USER ACTIONS</u>
            </th>
          </tr>
        </MDBTableHead>
 
        <Box />
        <Box />
        <Box />
 
      </MDBTable>
    </>
  );
}
 
const Box = () => {
  return (
    <>
      <MDBTableBody>
        <tr>
          <td>
            <p className="text mb-1">Residence Form</p>
          </td>
          <td>
          <MDBBtn
              className="text mb-1"
              style={{ fontSize: "1.2rem"}}
              color="link"
              rounded
            >
              <MDBBadge pill>Request Permission</MDBBadge>
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
                rounded
              >
                Send PDF
              </MDBBtn>
              <MDBBtn
                className="text mb-1"
                style={{ fontSize: "1rem" }}
                color="link"
                rounded
              >
                Drive Upload
              </MDBBtn>
            </div>
          </td>
        </tr>
      </MDBTableBody>
    </>
  );
};
 
export default UserConsole;
 
