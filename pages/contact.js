import Page from '../components/page';

import { pageInfo as leftPage }   from './about';

import icon from '@fortawesome/fontawesome-free-solid/faAddressBook';

const pageInfo = {
        title: 'contact',
        icon: icon,
        bgColor: '#00FF00',
        link: '/contact',
        children: (
            <React.Fragment>
                <h1>Content</h1>
                <p>Hi, here is "content" page.</p>
            </React.Fragment>
        )
};

import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
const topPage = {
    icon: faFacebook,
    bgColor: "#3b5998",
    link: 'https://www.facebook.com/shunsuke.mano.908'
};

import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
const bottomPage = {
    icon: faGithub,
    bgColor: "#f5f5f5",
    link: 'https://github.com/progfay'
};

import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
const rightPage = {
    icon: faTwitter,
    bgColor: "#1da1f2",
    link: 'https://twitter.com/progfay'
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