import '../home.css'; // Assuming that the CSS is in home.css in the same folder
import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import './form.css';
import ProfileImg from '../images/profile.jpeg';
import NavBar from '../components/navbar';
import RightProfileBar from '../components/RightProfileBar';

const Upload = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        patientEmail: '',
        patientPhoneNumber: '',
        doctorName: '',
        doctorPhoneNumber: '',
        hospitalName: '',
        report: null,
        doctorComment: ''
    });
    const [numPages, setNumPages] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            report: URL.createObjectURL(e.target.files[0])
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };
    return (
        <div className="Health-Dashboard">
            <NavBar/>


            <div id="main">
                <div id="greeting" className="card">
                    <h2>Upload your Health Reports Provided By Hospitals</h2>
                    <p id="greeting-message">Provide all the accurate data provided by Hospitals. We recommend doctors to upload their patients data through the portal.</p>
                </div>
                <div className="form-field">
                    <form onSubmit={handleSubmit}
                        className="form">
                        <label>
                            Patient Name
                            <input type="text" name="patientName" placeholder="Name of the patient"
                                value={
                                    formData.patientName
                                }
                                onChange={handleChange}
                                className="input"/>
                        </label>
                        <label>
                            Patient Email
                            <input type="email" name="patientEmail" placeholder="Email Address of the patient"
                                value={
                                    formData.patientEmail
                                }
                                onChange={handleChange}
                                className="input"/>
                        </label>
                        <label>
                            Patient Phone Number
                            <input type="tel" name="patientPhoneNumber" placeholder="Patient Phone Number"
                                value={
                                    formData.patientPhoneNumber
                                }
                                onChange={handleChange}
                                className="input"/>
                        </label>
                        <label>
                            Doctor Name
                            <input type="text" name="doctorName" placeholder="Name of the doctor who evaluated your health report "
                                value={
                                    formData.doctorName
                                }
                                onChange={handleChange}
                                className="input"/>
                        </label>
                        <label>
                            Doctor Phone Number
                            <input type="tel" name="doctorPhoneNumber" placeholder="Doctor Contact Number "
                                value={
                                    formData.doctorPhoneNumber
                                }
                                onChange={handleChange}
                                className="input"/>
                        </label>
                        <label>
                            Hospital Name
                            <input type="text" name="hospitalName" placeholder="Name of the Hospital who performed treatment"
                                value={
                                    formData.hospitalName
                                }
                                onChange={handleChange}
                                className="input"/>
                        </label>
                        <label>
                            Patient Report (PDF)
                            <input type="file" accept=".pdf"
                                onChange={handleFileChange}
                                className="input"/>
                        </label>
                        {
                        formData.report && (
                            <Document file={
                                    formData.report
                                }
                                onLoadSuccess={onDocumentLoadSuccess}>
                                {
                                Array.from(new Array(numPages), (el, index) => (
                                    <Page key={
                                            `page_${
                                                index + 1
                                            }`
                                        }
                                        pageNumber={
                                            index + 1
                                        }/>
                                ))
                            } </Document>
                        )
                    }
                        <label>
                            Doctor Comment
                            <textarea name="doctorComment" placeholder="Detailed doctor comment to help patient learn their conditions"
                                value={
                                    formData.doctorComment
                                }
                                onChange={handleChange}
                                className="input"/>
                        </label>
                        <button type="submit" className="submit-button">
                            Add Patient Report
                        </button>
                    </form>
                </div>
            </div>

            <RightProfileBar/>

        </div>
    );
}

export default Upload;
