import SlideStyle from '../style/slideStyle';

import FontAwesomeIcon    from '@fortawesome/react-fontawesome';
import faAngleDoubleUp    from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faAngleDoubleDown  from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faAngleDoubleLeft  from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'

const TopSlideLink = ({ icon }) => (
  <SlideStyle.Top>
    <FontAwesomeIcon icon={faAngleDoubleUp} />
    {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
  </SlideStyle.Top>
);

const BottomSlideLink = ({ icon }) => (
  <SlideStyle.Bottom>
    <FontAwesomeIcon icon={faAngleDoubleDown} />
    {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
  </SlideStyle.Bottom>
);

const LeftSlideLink = ({ icon }) => (
  <SlideStyle.Left>
    <FontAwesomeIcon icon={faAngleDoubleLeft} />
    {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
  </SlideStyle.Left>
);

const RightSlideLink  = ({ icon }) => (
  <SlideStyle.Right>
    <FontAwesomeIcon icon={faAngleDoubleRight} />
    {icon != null ? (<FontAwesomeIcon icon={icon} />) : null}
  </SlideStyle.Right>
);

export { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink };