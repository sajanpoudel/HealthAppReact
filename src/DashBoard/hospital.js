import React, { useState, useRef } from 'react';
import './home.css'; // Assuming that the CSS is in home.css in the same folder
import Modal from 'react-modal';
import { pdfjs } from 'react-pdf';

import NavBar from './components/navbar';
import RightProfileBar from './components/RightProfileBar';

Modal.setAppElement('#app'); // This line is important for accessibility reasons.

function Hospital() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const canvasRef = useRef(null);

    const openModal = () => {
        setModalIsOpen(true);
        loadPdf();
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const loadPdf = async () => {
        GlobalWorkerOptions.workerSrc = pdfjsWorker;
        const loadingTask = getDocument('https://andonovicmilica.files.wordpress.com/2018/07/short-stories-for-children.pdf');
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1); // or another page
        const viewport = page.getViewport({ scale: 1 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    };

    return (
        <div className="Hospital-Dashboard">
            <NavBar/>

            <div id="main">
                <div id="greeting" className="card">
                    <h2>Your All Health Reports</h2>
                    <p id="greeting-message">This is the collection of all your health reports from different hospitals.</p>
                </div>

                <div id="cards" className="card">
                    <h2>Reports History</h2>
                    <div className="hospital-card-list">
                        <span id="date" name="date">2022-02-11</span>
                        <span id="hospital-name" name="hospital-name">Civic Hospital</span>
                        <span id="doctor-name" name="doctor-name">Dr. Sajan Poudel</span>
                        <button id="report-view" name="report-view" onClick={openModal}>View Report</button>
                        <span id="call-now" name="call-now">
                            <a class="fixed-tel" href="tel:+8548222xxx" target="_blank" title="Call Now"></a>
                        </span>
                    </div>

                    {/* Repeat for other cards */}
                </div>

                {/* Repeat for other sections */}
            </div>
            <RightProfileBar/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Report Modal"
            >
                <button onClick={closeModal}>Close</button>
                <canvas ref={canvasRef} />
            </Modal>
        </div>
    );
}

export default Hospital;