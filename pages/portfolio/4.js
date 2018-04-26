import Page from '../../components/page';

import { pageInfo as topPage }    from '../about';
import { pageInfo as bottomPage } from './index';
import { pageInfo as leftPage }   from './3';
import { pageInfo as rightPage }  from './index';

import icon from '@fortawesome/fontawesome-free-solid/faUser';

const pageInfo = {
        title: 'portfolio',
        icon: null,
        bgColor: '#CCFFCC',
        link: '/portfolio/4',
        children: (
            <React.Fragment>
                <h1>Last</h1>
                <p> {"It's last page of portfolio."} </p>
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