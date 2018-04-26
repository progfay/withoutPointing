import Page from '../components/page';

import { pageInfo as topPage }    from './contact';
import { pageInfo as bottomPage } from './portfolio';
import { pageInfo as leftPage }   from './about';
import { pageInfo as rightPage }  from './contact';

import icon from '@fortawesome/fontawesome-free-solid/faInfoCircle';

const pageInfo = {
        title: 'about',
        icon: icon,
        bgColor: '#FFFFFF',
        link: '/about',
        children: (
            <React.Fragment>
                <h1>About</h1>
                <p>Hi, here is "about" page.</p>
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