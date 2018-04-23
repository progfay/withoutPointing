import DetectorStyle from '../style/detectorStyle';
import { withRouter } from 'next/router';
import Hammer from 'react-hammerjs';

export default withRouter(
  ({ children, router, up, down, left, right }) => (
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
      <div>
        <DetectorStyle>
            {children}
        </DetectorStyle>
      </div>
    </Hammer>
  )
);