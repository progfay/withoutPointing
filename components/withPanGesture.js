import Hammer from 'react-hammerjs';
import { withRouter } from 'next/router';

export default withRouter(
  ({ children, router, up, down, left, right }) => (
    <Hammer onPan={router.push(up)} direction='DIRECTION_UP'>
    <Hammer onPan={router.push(down)} direction='DIRECTION_DOWN'>
      <Hammer onPan={router.push(left)} direction='DIRECTION_LEFT'>
        <Hammer onPan={router.push(right)} direction='DIRECTION_RIGHT'>
          {children}
        </Hammer>
      </Hammer>
    </Hammer>
  </Hammer>
  )
);