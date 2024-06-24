import Link from 'next/link';
import { Modalprops } from '../utils/types';
import { useEffect } from 'react';

const CallModal: React.FC<Modalprops> = ({ show, handleClose, setShow }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`modal fade ${show ? 'show d-block' : ''}`} id="exampleModalCenter"
        tabIndex={-1} role="dialog" aria-labelledby="flight booking"
        aria-hidden={!show} style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ borderRadius: '10px' }}>
            <div className="modal-header justify-content-end border-0 p-0">
              <button type="button" className="closeButton mx-2" onClick={handleClose}>
                <span aria-hidden="true" style={{ fontSize: '1.5rem' }}>&times;</span>
              </button>
            </div>
            <div className="modal-body text-center d-flex flex-column align-items-center">
              <Link href="tel:1888 5087143"
                className="video-icon video-icon2 mb-3" style={{ color: '#007bff', fontSize: '2rem' }}>
                <i className="bi bi-telephone"></i>
              </Link>

              <Link href="tel:1888 5087143" className='call-title my-2' style={{ fontSize: '1.25rem', color: '#333', fontWeight: 'bold' }}> 1888 5087143 </Link>
              <h4 className='call-title mt-2' style={{ fontSize: '1.5rem', color: '#333' }}>Call Us Now</h4>
              <p style={{ fontSize: '1rem', color: '#666' }}>To unlock exclusive deals and offers for your bookings.</p>

              <button className='btn btn-search' style={{ backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '5px', padding: '10px 20px' }}>
                <Link href='tel:1888 5087143' style={{ color: 'white', textDecoration: 'none' }}>
                  <span className="fw-bold text-white">CALL NOW </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallModal;
