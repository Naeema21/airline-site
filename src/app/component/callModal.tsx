import Link from 'next/link';
import { Modalprops } from '../utils/types';

const CallModal:React.FC<Modalprops> = ({show , handleClose}) => {

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
              <Link href="tel:1888 508 7143"
                className="video-icon video-icon2 mr-30 ml-20 video_model mb-3">
                <i className="bi bi-telephone"></i>
              </Link>              <h4 className='call-title'>Give Us A Call</h4>
              <p>Your dream travel just a phone call away!</p>

              <button className='btn btn-search'>
                <Link href={'tel:18885087143'}>
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
