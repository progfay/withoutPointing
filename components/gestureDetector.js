import React from 'react';
import { withRouter } from 'next/router';
import Hammer from 'react-hammerjs';
import windowSize from 'react-window-size';

const VERTICAL   = 1;
const HORIZONTAL = 2;

const THRESHOLD_PER_LENGTH = 0.55;

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
      distance : 0
    };
    this.lerpBackColor = this.lerpBackColor.bind(this);
  }

  lerpBackColor = () => { setTimeout(() => {
    const updatedDistance = this.state.distance * 0.85;
    if (Math.abs(updatedDistance) > 10) {
      this.setState({ distance: updatedDistance });
      this.lerpBackColor();
    } else {
      this.setState({ direction: 0, start: null, distance: 0 });
    }
  }, 20) };

  render = (
    { top, bottom, left, right, bgColor, router, windowWidth, windowHeight } = this.props,
    { direction, start, distance } = this.state
  ) => (
    <React.Fragment>
        <Hammer direction={'DIRECTION_ALL'}
        onPanStart={(e) => {
          this.setState({
            direction: e.direction == 16 || e.direction == 8 ? VERTICAL : HORIZONTAL,
            start: e.center
          })
        }}
        onPan={(e) => {
          this.setState({
            distance: (
              direction == VERTICAL   ? (e.center.y - start.y) :
              direction == HORIZONTAL ? (e.center.x - start.x) : 0
            )
          })
        }}
        onPanEnd={(e) => {
          if(!start) return;
          const threshold = (direction == HORIZONTAL ? (windowWidth) : (windowHeight)) * THRESHOLD_PER_LENGTH;
          const distance = (
            direction == VERTICAL   ? (e.center.y - start.y) :
            direction == HORIZONTAL ? (e.center.x - start.x) : 0
          );
          if (!direction || Math.abs(distance) < threshold) {
            this.lerpBackColor();
            return;
          }
          this.setState({ distance: threshold });
          if (direction == VERTICAL) {
              router.replace(distance > 0 ? top.link  : bottom.link);
          } else { // horizontal
              router.replace(distance > 0 ? left.link : right.link);
          }
        }}>
          <div>
            <div className='detactor' />
            <style jsx>{`
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 100;
            `}</style>
          </div>
        </Hammer>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          backgroundColor: start ? colorLerp(
              bgColor,
              (
                direction == VERTICAL   ? (distance > 0 ? top.bgColor  : bottom.bgColor) :
                direction == HORIZONTAL ? (distance > 0 ? left.bgColor : right.bgColor)  : bgColor
              ),
              Math.min(Math.abs(distance) / ((direction == HORIZONTAL ? windowWidth : windowHeight) * THRESHOLD_PER_LENGTH), 1)
            ) : bgColor
          }}>
        </div>
      </React.Fragment>
  )
}

export default withRouter(windowSize(GestureDetector));