const TopSlideLink = ({ icon }) => (
  <React.Fragment>
    <div className='top-slide-link'>
      <i className='fas fa-angle-double-up' />
      <i className={`fas ${icon}`} />
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
      <i className='fas fa-angle-double-down' />
      <i className={`fas ${icon}`} />
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
      <i className='fas fa-angle-double-left' />
      <i className={`fas ${icon}`} />
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

const RightSlideLink = ({ icon }) => (
  <React.Fragment>
    <div className='right-slide-link'>
      <i className='fas fa-angle-double-right' />
      <i className={`fas ${icon}`} />
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