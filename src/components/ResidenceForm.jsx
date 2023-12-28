import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/residenceForm.css";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import axios from "axios";
 
const ResidenceForm = () => {
  const navigateTo = useNavigate();
 
  // State variables for form fields
  const [name, setName] = useState("");
  const [ParentName, setParentName] = useState("");
  const [village, setVillage] = useState("");
  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [placeOfRegister, setPlace] = useState("");
  const [date, setDate] = useState(new Date());
  const [docForVerification, setVerification] = useState("");
 
  const dateOfRegister = format(date, 'MM/dd/yyyy');
  const email = "mikog57667@ubinert.com";
   
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const formData = {
      name,
      ParentName,
      village,
      taluka,
      district,
      placeOfRegister,
      dateOfRegister,
      docForVerification,
      email:email
    };
   
    console.log("Form Data:", formData);
    const response = await axios.post("http://localhost:8080/api/residenceform",{
      name:name,
      parent_name:ParentName,
      village:village,
      taluka:taluka,
      district:district,
      place_of_register:placeOfRegister,
      date_of_register:dateOfRegister,
      document_for_verify:docForVerification,
      email:email
    })

    if(response.data == "added success"){
      alert("Form submitted successfully!!!")
    }
    else{
      alert("Form Not submitted😒")
    }

    setName("")
    setParentName("");
    setVillage("")
    setTaluka("")
    setDistrict("")
    setPlace("");
    setDate(new Date())
    setVerification("")

    navigateTo("/userConsole");
  };
 
  return (
    <div className="residence-form-container">
      <h2>Residence Certificate Form</h2>
      <form className="residence-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name of the person:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="so_wo">Father's Name</label>
              </td>
              <td>
                <input
                  type="text"
                  id="so_wo"
                  className="input-field"
                  value={ParentName}
                  onChange={(e) => setParentName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="village">Village:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="village"
                  className="input-field"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="taluka">Taluka:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="taluka"
                  className="input-field"
                  value={taluka}
                  onChange={(e) => setTaluka(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="district">District:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="district"
                  className="input-field"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="place">Place of Registration:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="place"
                  className="input-field"
                  value={placeOfRegister}
                  onChange={(e) => setPlace(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="date">Date of Register:</label>
              </td>
              <td>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="input-field date-picker"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="verification">Document for Verification:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="verification"
                  className="input-field"
                  value={docForVerification}
                  onChange={(e) => setVerification(e.target.value)}
                  required
                />
              </td>
            </tr>
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
 
export default ResidenceForm;
 