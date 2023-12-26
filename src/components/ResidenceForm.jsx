import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/residenceForm.css";
import { useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResidenceForm = () => {
  const navigateTo = useNavigate();
  const [startDate, setStartDate] = React.useState(new Date());
  const downloadPDF = ()=>{
    const capture = document.querySelector('.residence-form-container');

    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const page = new jsPDF('p','mm','a4');
      const componentWidth = page.internal.pageSize.getWidth();
      const componentHeight = page.internal.pageSize.getHeight();
      page.addImage(imgData,'PNG',0,0,componentWidth,componentHeight);
      page.save('new.pdf');

    }) 
  }
  // const downloadPDF = () => {
  //   const capture = document.querySelector('.residence-form-container');
  
    // html2canvas(capture).then((canvas) => {
    //   const imgData = canvas.toDataURL('image/png');
    //   const pdf = new jsPDF('p', 'mm', 'a4');
    //   const componentWidth = pdf.internal.pageSize.getWidth();
    //   const componentHeight = pdf.internal.pageSize.getHeight();
    //   pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
  
      // Convert the PDF content to a Blob
      // const pdfBlob = pdf.output('blob');
  
      // Create a FormData object to send the Blob to the server
      // const formData = new FormData();
      // formData.append('pdfFile', pdfBlob, 'generated.pdf');
  
      // Send the PDF Blob to the server using Axios
      // axios.post('http://localhost:8080/upload', formData)
      //   .then(response => {
      //     console.log('File uploaded successfully', response.data);
      //     // Handle any additional logic after successful upload
      //   })
      //   .catch(error => {
      //     console.error('Error uploading file', error);
      //     // Handle errors
      //   });
    // });
  


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
                <input type="text" id="name" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="so_wo">Father's Name</label>
              </td>
              <td>
                <input type="text" id="so_wo" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="so_wo">Mother's Name</label>
              </td>
              <td>
                <input type="text" id="so_wo" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="village">Village:</label>
              </td>
              <td>
                <input type="text" id="village" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="taluka">Taluka:</label>
              </td>
              <td>
                <input type="text" id="taluka" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="district">District:</label>
              </td>
              <td>
                <input type="text" id="district" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="place">Place of Registration:</label>
              </td>
              <td>
                <input type="text" id="place" className="input-field" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="date">Date of Register:</label>
              </td>
              <td>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
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
                <input type="text" id="verification" className="input-field" required />
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
                <button
                  type="button"
                  className="submit-button"
                  onClick={downloadPDF}
                >
                  Generate PDF
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
