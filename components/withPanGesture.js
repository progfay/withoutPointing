import Hammer from 'react-hammerjs';
import { withRouter } from 'next/router';

export default withRouter(
  ({ children, router, up, down, left, right }) => (
    <React.Fragment>
      <Hammer direction='DIRECTION_ALL' onSwipe={(e) => {
        switch(e.direction) {
          case 16:
            router.replace(up);
            break;
          case 8:
            router.replace(down);
            break;
          case 4:
            router.replace(left);
            break;
          case 2:
            router.replace(right);
            break;
        }
      }}>
        <div className='hammer'>
          {children}
        </div>
      </Hammer>
      <style jsx>{`
      .hammer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
        }
      `}</style>
    </React.Fragment>
  )
);