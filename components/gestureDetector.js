
import React from 'react';
import { withRouter } from 'next/router';
import Hammer from 'react-hammerjs';
import DetectorStyle from '../style/detectorStyle';
import windowSize from 'react-window-size';

const UP    = 16;
const DOWN  =  8;
const LEFT  =  4;
const RIGHT =  2;

const THRESHOLD_PER_LENGTH = 0.7;

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
      current  : null,
      distance : 0
    };
  }

  render = (
    { top, bottom, left, right, bgColor, router, windowWidth, windowHeight } = this.props,
    { direction, start, current, distance } = this.state
  ) => (
    <React.Fragment>
        <Hammer vertical={true}
        onPanStart={(e) => {this.setState({ direction: e.direction, start: e.center }); console.log(1234)}}
        onPan={(e) => {
          this.setState({
            current: e.center,
            distance: (
              direction == UP   || direction == DOWN  ? (e.center.y - start.y) :
              direction == LEFT || direction == RIGHT ? (e.center.x - start.x) : 0
            )
          })
        }}
        onPanEnd={(e) => {
          if(!(start && current)) return;
          const threshold = ((direction == LEFT || direction == RIGHT) ? (windowWidth) : (windowHeight)) * THRESHOLD_PER_LENGTH;
          const distance = (
            direction == UP   || direction == DOWN  ? (current.y - start.y) :
            direction == LEFT || direction == RIGHT ? (current.x - start.x) : 0
          );
          if (direction == 0 || Math.abs(distance) < threshold) {
            this.setState({ direction: 0, start: null, current: null });
            return;
          }
          switch(direction) {
            case 16:
            case 8:
              if (distance > 0) {
                router.replace(top.link);
              } else {
                router.replace(bottom.link);
              }
              break;
            case 4:
            case 2:
              if (distance > 0) {
                router.replace(left.link);
              } else {
                router.replace(right.link);
              }
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
                direction == UP   || direction == DOWN  ? (distance > 0 ? top.bgColor  : bottom.bgColor) :
                direction == LEFT || direction == RIGHT ? (distance > 0 ? left.bgColor : right.bgColor)  : bgColor
              ),
              Math.abs(distance) / ((direction == LEFT || direction == RIGHT ? windowWidth : windowHeight) * THRESHOLD_PER_LENGTH)
            ) : bgColor
          }}>
        </div>
      </React.Fragment>
  )
}

export default withRouter(windowSize(GestureDetector));