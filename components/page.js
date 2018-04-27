import HeadWithoutScroll from '../components/headWithoutScroll';
import GestureDetector from '../components/gestureDetector';
import { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink } from '../components/slideLink';

export default ({ pageInfo, top, bottom, left, right }) => (
    <React.Fragment>
        <HeadWithoutScroll title={pageInfo.title} />
        <div className='outer'>
            <div className='inner' style={{textAlign: 'center'}}>
                {pageInfo.children}
            </div>
        </div>
        <style jsx>{`
            .outer {
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
        `}</style>
        <GestureDetector
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            bgColor={pageInfo.bgColor} />
        <TopSlideLink    icon={top.icon} />
        <BottomSlideLink icon={bottom.icon} />
        <LeftSlideLink   icon={left.icon} />
        <RightSlideLink  icon={right.icon} />
    </React.Fragment>
);