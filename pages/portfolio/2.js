import Page from '../../components/page';

import { pageInfo as topPage }    from '../about';
import { pageInfo as bottomPage } from './index';
import { pageInfo as leftPage }   from './1';
import { pageInfo as rightPage }  from './3';

import icon from '@fortawesome/fontawesome-free-solid/faUser';

const pageInfo = {
        title: 'portfolio',
        icon: null,
        bgColor: '#00FFCC',
        link: '/portfolio/2',
        children: (
            <React.Fragment>
                <h1>Second</h1>
                <p> {"It's second page of portfolio."} </p>
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