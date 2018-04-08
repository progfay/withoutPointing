import HeadWithoutScroll from '../components/headWithoutScroll';
import { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink } from '../components/slideLink';
import WithPanGesture from '../components/withPanGesture';

export default () => (
    <React.Fragment>
        <HeadWithoutScroll title="about"/>
        <WithPanGesture
            up='/contact'
            down='/index'
            left='/portfolio'
            right='/about'
        >
            <TopSlideLink icon='fa-address-book' />
            <BottomSlideLink icon='fa-home'/>
            <LeftSlideLink icon='fa-user' />
            <RightSlideLink icon='fa-info-circle' />
        </WithPanGesture>
    </React.Fragment>
);