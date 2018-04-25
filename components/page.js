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
            top={topPage}
            bottom={bottomPage}
            left={leftPage}
            right={rightPage}
            bgColor={pageInfo.bgColor} />
        <TopSlideLink    icon={topPage.icon} />
        <BottomSlideLink icon={bottomPage.icon} />
        <LeftSlideLink   icon={leftPage.icon} />
        <RightSlideLink  icon={rightPage.icon} />
    </React.Fragment>
);