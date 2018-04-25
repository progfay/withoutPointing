import SlideStyle from '../style/slideStyle';

import FontAwesomeIcon    from '@fortawesome/react-fontawesome';
import faAngleDoubleUp    from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faAngleDoubleDown  from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faAngleDoubleLeft  from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'

const TopSlideLink = ({ icon }) => (
  <SlideStyle.Top>
    <FontAwesomeIcon icon={faAngleDoubleUp} />
    <FontAwesomeIcon icon={icon} />
  </SlideStyle.Top>
);

const BottomSlideLink = ({ icon }) => (
  <SlideStyle.Bottom>
    <FontAwesomeIcon icon={faAngleDoubleDown} />
    <FontAwesomeIcon icon={icon} />
  </SlideStyle.Bottom>
);

const LeftSlideLink = ({ icon }) => (
  <SlideStyle.Left>
    <FontAwesomeIcon icon={faAngleDoubleLeft} />
    <FontAwesomeIcon icon={icon} />
  </SlideStyle.Left>
);

const RightSlideLink  = ({ icon }) => (
  <SlideStyle.Right>
    <FontAwesomeIcon icon={faAngleDoubleRight} />
    <FontAwesomeIcon icon={icon} />
  </SlideStyle.Right>
);

export { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink };