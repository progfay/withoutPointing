import Hammer from 'react-hammerjs';
import { withRouter } from 'next/router';

export default withRouter(
  ({ children, router, up, down, left, right }) => (
    <React.Fragment>
      <Hammer direction='DIRECTION_ALL' onSwipe={(e) => {
        switch(e.direction) {
          case 16:
            router.push(up);
            break;
          case 8:
            router.push(down);
            break;
          case 4:
            router.push(left);
            break;
          case 2:
            router.push(right);
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
        }
      `}</style>
    </React.Fragment>
  )
);