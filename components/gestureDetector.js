
import React from 'react';
import { withRouter } from 'next/router';
import Hammer from 'react-hammerjs';
import DetectorStyle from '../style/detectorStyle';
import windowSize from 'react-window-size';

const UP    = 16;
const DOWN  =  8;
const LEFT  =  4;
const RIGHT =  2;

const colorLerp = (start, stop, amt) => {
  let r = new RegExp(".{1,2}","g");
  const startColor = start.slice(1).match(r).map(hex => parseInt(hex, 16));
  const stopColor  = stop.slice(1).match(r).map(hex => parseInt(hex, 16));
  return '#'
    + ('0' + Math.round(startColor[0] + (stopColor[0] - startColor[0]) * amt).toString(16)).slice(-2)
    + ('0' + Math.round(startColor[1] + (stopColor[1] - startColor[1]) * amt).toString(16)).slice(-2)
    + ('0' + Math.round(startColor[2] + (stopColor[2] - startColor[2]) * amt).toString(16)).slice(-2);
}

class GestureDetector extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      direction: 0,
      start    : null,
      current  : null
    };
  }

  render = (
    { top, bottom, left, right, bgColor, router, windowWidth, windowHeight } = this.props,
    { direction, start, current } = this.state
  ) => (
    <React.Fragment>
        <Hammer
        onPanStart={(e) => {this.setState({ direction: e.direction, start: e.center }); console.log(1234)}}
        onPan={(e) => {
          this.setState({ current: e.center });
          // switch(direction) {
          // case UP:
          //   this.setState({ distance: distance - e.overallVelocityY * 500 });
          //   break;
          // case DOWN:
          //   this.setState({ distance: distance + e.overallVelocityY * 500 });
          //   break;
          // case LEFT:
          //   this.setState({ distance: distance + e.overallVelocityX * 500 });
          //   break;
          // case RIGHT:
          //   this.setState({ distance: distance - e.overallVelocityX * 500 });
          //   break;
          // }
          // console.log(this.state.distance);
        }}
        onPanEnd={(e) => {
          console.log(1234);
          if(!(start && current)) return;
          const threshold = ((direction == LEFT || direction == RIGHT) ? (windowWidth) : (windowHeight)) * 0.8;
          const distance = (
            direction == UP    ? (current.y - start.y) :
            direction == DOWN  ? (start.y - current.y) :
            direction == LEFT  ? (current.y - start.x) :
            direction == RIGHT ? (start.x - current.x) : 0
          );
          console.log(distance + ' ' + threshold);
          if (direction == 0 || distance < threshold) {
            this.setState({ direction: 0, start: null, current: null });
            return;
          }
          switch(direction) {
            case 16:
              router.replace(top.link);
              break;
            case 8:
              router.replace(bottom.link);
              break;
            case 4:
              router.replace(left.link);
              break;
            case 2:
              router.replace(right.link);
              break;
          }
        }}>
          <div>
            <DetectorStyle />
          </div>
        </Hammer>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          backgroundColor: start && current ?
            colorLerp(
              bgColor,
              (
                direction == UP    ? top.bgColor :
                direction == DOWN  ? bottom.bgColor :
                direction == LEFT  ? left.bgColor :
                direction == RIGHT ? right.bgColor : bgColor
              ),
              (
                direction == UP    ? (current.y - start.y) :
                direction == DOWN  ? (start.y - current.y) :
                direction == LEFT  ? (current.y - start.x) :
                direction == RIGHT ? (start.x - current.x) : 0
              ) / ((direction == LEFT || direction == RIGHT) ? (windowWidth) * 0.8 : (windowHeight) * 0.8)
            ) : bgColor
          }}>
        </div>
      </React.Fragment>
  )
}

export default withRouter(windowSize(GestureDetector));