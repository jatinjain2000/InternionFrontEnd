import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/aadharForm.css";
import { useNavigate } from "react-router-dom";

const AadharForm = () => {
  const navigateTo = useNavigate();
  const [dob, setDob] = React.useState(new Date());
  const [verificationType, setVerificationType] = React.useState("document");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="aadhar-enrollment-form-container">
      <h2>Aadhar Enrollment Form</h2>
      <form className="aadhar-enrollment-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="enrollmentType">Type of Enrollment:</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="new"
                  name="enrollmentType"
                  required
                />{" "}
                New&nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  id="update"
                  name="enrollmentType"
                  required
                />{" "}
                Update
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="nationality">Nationality:</label>
              </td>
              <td>
                <select
                  id="nationality"
                  name="nationality"
                  className="select-field"
                  required
                >
                  <option value="indian">Indian</option>
                  <option value="nri">NRI</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="aadharNumber">
                  Aadhar Number (in case of update):
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="aadharNumber"
                  className="input-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input type="text" id="name" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobileNumber">Mobile Number:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="mobileNumber"
                  className="input-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Address (Complete):</label>
              </td>
              <td>
                <textarea
                  id="address"
                  className="input-field"
                  required
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dob">Date of Birth:</label>
              </td>
              <td>
                <DatePicker
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  dateFormat="dd/MM/yyyy"
                  className="input-field date-picker"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="gender">Gender:</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  required
                />{" "}
                Male&nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  id="female"
                  name="gender"
                  required
                />{" "}
                Female
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="age">Age:</label>
              </td>
              <td>
                <input type="text" id="age" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="verificationType">Verification Type:</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="documentBased"
                  name="verificationType"
                  value="document"
                  checked={verificationType === "document"}
                  onChange={() => setVerificationType("document")}
                  required
                />{" "}
                Document Based&nbsp;&nbsp;
                <input
                  type="radio"
                  id="hofBased"
                  name="verificationType"
                  value="hof"
                  checked={verificationType === "hof"}
                  onChange={() => setVerificationType("hof")}
                  required
                />{" "}
                Head of family(HOF) Based
              </td>
            </tr>
            {verificationType === "document" && (
              <tr>
                <td>
                  <label htmlFor="documentType">
                    Document for Verification:
                  </label>
                </td>
                <td>
                  <select
                    id="documentType"
                    name="documentType"
                    className="select-field"
                    required
                  >
                    <option value="pan">PAN</option>
                    <option value="voter">Voter ID</option>
                    <option value="ration">Ration Card</option>
                  </select>
                </td>
              </tr>
            )}
            {verificationType === "hof" && (
              <>
                <tr>
                  <td>
                    <label htmlFor="hofName">Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="hofName"
                      className="input-field"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="hofDob">Date of Birth:</label>
                  </td>
                  <td>
                    <DatePicker
                      selected={dob}
                      onChange={(date) => setDob(date)}
                      dateFormat="dd/MM/yyyy"
                      className="input-field date-picker"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="relationship">Relationship:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="relationship"
                      className="input-field"
                      required
                    />
                  </td>
                </tr>
              </>
            )}

            <tr>
              <td colSpan="2" className="submit-row">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="submit-button"
                  onClick={() => navigateTo("/")}
                >
                  Go back
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AadharForm;
