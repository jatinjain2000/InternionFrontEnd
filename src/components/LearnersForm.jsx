import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/learnersForm.css";
import { useNavigate } from "react-router-dom";

const LearnersForm = () => {
  const navigateTo = useNavigate();
  const [dob, setDob] = React.useState(new Date());
  const [bloodGroup, setBloodGroup] = React.useState("");
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="learners-license-form-container">
      <h2>Learner's License Form</h2>
      <form className="learners-license-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="vehicleType">Type of Vehicle:</label>
              </td>
              <td>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  className="select-field"
                  required
                >
                  <option value="a">Motor cycle without gear</option>
                  <option value="b">Motor cycle with gear</option>
                  <option value="c">Invalid carriage</option>
                  <option value="d">Light Motor vehicle</option>
                  <option value="e">Transport vehicle</option>
                  <option value="f">Road roller</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="fullName">Full Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="fullName"
                  className="input-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="parentName">Son/Wife/Daughter of:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="parentName"
                  className="input-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Permanent Address:</label>
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
                <label htmlFor="durationOfStay">
                  Duration of Stay at the Present Address:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="durationOfStay"
                  className="input-field"
                  required
                />
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
                <label htmlFor="qualification">
                  Educational Qualification:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="qualification"
                  className="input-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="identificationMarks">
                  Identification Mark(s):
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="identificationMarks"
                  className="input-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="bloodGroup">Blood Group:</label>
              </td>
              <td>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  className="select-field"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Blood Group
                  </option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="proofDocument">Document for Proof:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="proofDocument"
                  className="input-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="registrationDate">Date of Registration:</label>
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
              <td colSpan="2" className="submit-row">
                <button type="submit">Submit</button>
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

export default LearnersForm;
