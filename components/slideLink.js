import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDoubleUp from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faAngleDoubleDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faAngleDoubleLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'

const TopSlideLink = ({ icon }) => (
  <React.Fragment>
    <div className='top-slide-link'>
        <FontAwesomeIcon icon={faAngleDoubleUp} />
        <FontAwesomeIcon icon={icon} />
    </div>
    <style jsx>{`
      .top-slide-link {
        width: 100vw;
        height: 10vmin;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `}</style>
  </React.Fragment>
);

const BottomSlideLink = ({ icon }) => (
  <React.Fragment>
    <div className='bottom-slide-link'>
      <FontAwesomeIcon icon={faAngleDoubleDown} />
      <FontAwesomeIcon icon={icon} />
    </div>
    <style jsx>{`
      .bottom-slide-link {
        width: 100vw;
        height: 10vmin;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
      }
    `}</style>
  </React.Fragment>
);

const LeftSlideLink = ({ icon }) => (
  <React.Fragment>
    <div className='left-slide-link'>
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
      <FontAwesomeIcon icon={icon} />
    </div>
    <style jsx>{`
      .left-slide-link {
        width: 10vmin;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }
    `}</style>
  </React.Fragment>
);

const RightSlideLink = ({ type, icon }) => (
  <React.Fragment>
    <div className='right-slide-link'>
      <FontAwesomeIcon icon={faAngleDoubleRight} />
      <FontAwesomeIcon icon={icon} />
    </div>
    <style jsx>{`
      .right-slide-link {
        width: 10vmin;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
      }
    `}</style>
  </React.Fragment>
);

export { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink };