import Page from '../../components/page';

import { pageInfo as topPage }    from '../about';
import { pageInfo as bottomPage } from './index';
import { pageInfo as leftPage }   from './2';
import { pageInfo as rightPage }  from './4';

import icon from '@fortawesome/fontawesome-free-solid/faUser';

const pageInfo = {
        title: 'portfolio',
        icon: null,
        bgColor: '#00C0FF',
        link: '/portfolio/3',
        children: (
            <React.Fragment>
                <h1>Third</h1>
                <p> {"It's third page of portfolio."} </p>
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