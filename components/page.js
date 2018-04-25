import HeadWithoutScroll from '../components/headWithoutScroll';
import GestureDetector from '../components/gestureDetector';
import { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink } from '../components/slideLink';
import ContentStyle from '../style/contentStyle';

export default ({ pageInfo, top, bottom, left, right }) => (
    <React.Fragment>
        <HeadWithoutScroll title={pageInfo.title} />
        <ContentStyle.Outer>
            <ContentStyle.Inner>
                {pageInfo.children}
            </ContentStyle.Inner>
        </ContentStyle.Outer>
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