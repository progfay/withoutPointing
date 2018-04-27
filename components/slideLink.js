import FontAwesomeIcon    from '@fortawesome/react-fontawesome';
import faAngleDoubleUp    from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faAngleDoubleDown  from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faAngleDoubleLeft  from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'

const TopSlideLink = ({ icon }) => (
  <React.Fragment>
    <div className='top-slide-bar'>
      <FontAwesomeIcon icon={faAngleDoubleUp} />
      {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
    </div>
    <style jsx>{`
    .top-slide-bar {
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
    <div className='bottom-slide-bar'>
      <FontAwesomeIcon icon={faAngleDoubleDown} />
      {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
    </div>
    <style jsx>{`
      .bottom-slide-bar {
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
    <div className='left-slide-bar'>
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
      {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
    </div>
    <style jsx>{`
      .left-slide-bar {
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

const RightSlideLink  = ({ icon }) => (
  <React.Fragment>
    <div className='right-slide-bar'>
      <FontAwesomeIcon icon={faAngleDoubleRight} />
      {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
    </div>
    <style jsx>{`
      .right-slide-bar {
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