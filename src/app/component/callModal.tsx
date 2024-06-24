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
        aria-hidden={!show} style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end border-0 p-0">
              <button type="button" className="closeButton mx-2" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center d-flex flex-column align-items-center">
              <Link href="tel:1888 5087143"
                className="video-icon video-icon2 mr-30 ml-20 video_model mb-3">
                <i className="bi bi-telephone"></i>
              </Link>

              <Link href={"tel:1888 5087143"} className='call-title my-2'> 1888 5087143 </Link>
              <h4 className='call-title'>Give Us A Call</h4>
              <p>Request a call back from us to get more information about our
                services and offers.</p>

              <button className='btn btn-search'>
                <Link href={'tel:1888 5087143'}>
                  <span className="fw-bold text-white">CALL US </span>
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
