import WithPanGesture from '../components/withPanGesture';
import { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink } from '../components/slideLink';

export default ({ up, down, left, right, children }) => (
    <React.Fragment>
      <WithPanGesture up={up.link} down={down.link} left={left.link} right={right.link}>
        <TopSlideLink> {up.section} </TopSlideLink>
        <BottomSlideLink> {down.section} </BottomSlideLink>
        <LeftSlideLink> {left.section} </LeftSlideLink>
        <RightSlideLink> {right.section} </RightSlideLink>
        <div className='content-outer'>
          <div className="content-inner">
            {children}
          </div>
        </div>
    </WithPanGesture>

    <style jsx>{`
      .content-outer {
        position: fixed;
        top: 10vmin;
        left: 10vmin;
        width: calc(100vw - 20vmin);
        height: calc(100vh - 20vmin);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
      }

      .content-inner {
        text-align: center;
      }
    `}</style>
  </React.Fragment>
)