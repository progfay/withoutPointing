import SlideStyle from '../style/slideStyle';

const TopSlideLink = ({ children }) => <SlideStyle.Top> {children} </SlideStyle.Top>;

const BottomSlideLink = ({ children }) => <SlideStyle.Bottom> {children} </SlideStyle.Bottom>;

const LeftSlideLink = ({ children }) => <SlideStyle.Left> {children} </SlideStyle.Left>;

const RightSlideLink = ({ children }) => <SlideStyle.Right> {children} </SlideStyle.Right>;

export { TopSlideLink, BottomSlideLink, LeftSlideLink, RightSlideLink };