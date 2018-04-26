import Page from '../../components/page';

import { pageInfo as topPage }    from '../about';
import { pageInfo as bottomPage } from './index';
import { pageInfo as leftPage }   from './index';
import { pageInfo as rightPage }  from './2';

import icon from '@fortawesome/fontawesome-free-solid/faUser';

const pageInfo = {
        title: 'portfolio',
        icon: null,
        bgColor: '#CCFFCC',
        link: '/portfolio/1',
        children: (
            <React.Fragment>
                <h1>First</h1>
                <p> {"It's first page of portfolio."} </p>
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