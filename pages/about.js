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
        </WithPanGesture>
    </React.Fragment>
);