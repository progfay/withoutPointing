import WithPanGesture from '../components/withPanGesture';
import { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink } from '../components/slideLink';
import ContentStyle from '../style/contentStyle';

export default ({ up, down, left, right, children }) => (
  <WithPanGesture up={up.link} down={down.link} left={left.link} right={right.link}>
    <TopSlideLink> {up.section} </TopSlideLink>
    <BottomSlideLink> {down.section} </BottomSlideLink>
    <LeftSlideLink> {left.section} </LeftSlideLink>
    <RightSlideLink> {right.section} </RightSlideLink>
    <ContentStyle.Outer>
      <ContentStyle.Inner>
        {children}
      </ContentStyle.Inner>
    </ContentStyle.Outer>
  </WithPanGesture>
)