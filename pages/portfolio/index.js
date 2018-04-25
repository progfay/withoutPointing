import Page from '../../components/page';

import { pageInfo as topPage }    from '../about';
import { pageInfo as bottomPage } from './index';
import { pageInfo as leftPage }   from './4';
import { pageInfo as rightPage }  from './1';

import icon from '@fortawesome/fontawesome-free-solid/faUser';

const pageInfo = {
        title: 'portfolio',
        icon: icon,
        bgColor: '#0000FF',
        link: '/portfolio',
        children: (
            <React.Fragment>
                <h1>Portfolio</h1>
                <p> {"It's top page of portfolio."} </p>
            </React.Fragment>
        )
};

export default () => (
    <Page
        pageInfo={pageInfo}
        top={topPage}
        bottom={bottomPage}
        left={leftPage}
        right={rightPage}
        />
);
export { pageInfo };