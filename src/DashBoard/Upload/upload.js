import '../home.css'; // Assuming that the CSS is in home.css in the same folder
import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import './form.css';
import ProfileImg from '../images/profile.jpeg';
import NavBar from '../components/navbar';
import RightProfileBar from '../components/RightProfileBar';

// The text inputs of the form, rendered in this order.
const TEXT_FIELDS = [
    {label: 'Patient Name', name: 'patientName', type: 'text', placeholder: 'Name of the patient'},
    {label: 'Patient Email', name: 'patientEmail', type: 'email', placeholder: 'Email Address of the patient'},
    {label: 'Patient Phone Number', name: 'patientPhoneNumber', type: 'tel', placeholder: 'Patient Phone Number'},
    {label: 'Doctor Name', name: 'doctorName', type: 'text', placeholder: 'Name of the doctor who evaluated your health report '},
    {label: 'Doctor Phone Number', name: 'doctorPhoneNumber', type: 'tel', placeholder: 'Doctor Contact Number '},
    {label: 'Hospital Name', name: 'hospitalName', type: 'text', placeholder: 'Name of the Hospital who performed treatment'},
];

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
        const file = e.target.files[0];
        if (!file) {
            return; // the file picker was cancelled
        }
        setFormData({
            ...formData,
            report: URL.createObjectURL(file)
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
                        {
                        TEXT_FIELDS.map(({label, name, type, placeholder}) => (
                            <label key={name}>
                                {label}
                                <input type={type} name={name} placeholder={placeholder}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="input"/>
                            </label>
                        ))
                    }
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
