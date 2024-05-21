
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './CallModal.module.css'; 
import phoneIcon from '../utils/images/icons/phone-icon-yellow.png'; 

const CallModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCall = () => {
    alert("Calling...");
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        Please Call Us
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className={styles.modalBody}>
          <button type="button" className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
          <div className={styles.modalContent}>
          <img src= {phoneIcon.src} alt="" className={styles.callIcon} />
            <h5>Give Us A Call</h5>
            <p>We're here to help you with your experience.</p>
            <Button variant="warning" onClick={handleCall}>
              CALL US NOW
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CallModal;
