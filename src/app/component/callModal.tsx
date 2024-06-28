import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { PopupBg } from '../utils/images';
import { Modalprops } from '../utils/types';

const CallModal: React.FC<Modalprops> = ({ show, handleClose, setShow }) => {

  const path = usePathname()

  useEffect(() => {
    if(path != '/thank-you'){
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className={`modal  fade ${show ? 'show d-block' : ''}`} id="exampleModalCenter"
        tabIndex={-1} role="dialog" aria-labelledby="flight booking"
        aria-hidden={!show} style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog modal-dialog-centered  " role="document">
          <div className="modal-content popup-bg" style={{ borderRadius: '10px', backgroundImage: `url(${PopupBg.src})` }}>
            <div className="modal-header justify-content-end border-0 p-0">
              <button type="button" className="closeButton mx-2" onClick={handleClose}>
                <span aria-hidden="true" style={{ fontSize: '1.5rem' }}>&times;</span>
              </button>
            </div>
            <div className="modal-body text-center d-flex flex-column align-items-center py-4">
              <Link href="tel:1888 5087143"
                className="video-icon video-icon2 mb-3 fs-1" >
                <i className="bi bi-telephone-fill"></i>
              </Link>

              <Link href="tel:1888 5087143" className='fw-bold theme-text-primary my-2 fs-1'> 1888 5087143 </Link>
              <h4 className='fw-bold text-dark mt-2'>Call Us Now</h4>
              <p  className='text-black'>To unlock exclusive deals and offers for your bookings!</p>

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
