import HeadWithoutScroll from '../components/headWithoutScroll';
import Content from '../components/content';

import FontAwesomeIcon    from '@fortawesome/react-fontawesome'
import faAngleDoubleUp    from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faAngleDoubleDown  from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faAngleDoubleLeft  from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'
import faUser             from '@fortawesome/fontawesome-free-solid/faUser';
import faFacebook         from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter          from '@fortawesome/fontawesome-free-brands/faTwitter';
import faGithub           from '@fortawesome/fontawesome-free-brands/faGithub';

export default () => (
    <React.Fragment>
        <HeadWithoutScroll title="contact"/>
        <Content
            up={{
                link: 'https://www.facebook.com/shunsuke.mano.908',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleUp} />
                        <FontAwesomeIcon icon={faFacebook} />
                    </React.Fragment>
                )
            }}
            down={{
                link: 'https://github.com/progfay',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                        <FontAwesomeIcon icon={faGithub} />
                    </React.Fragment>
                )
            }}
            left={{
                link: '/about',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        <FontAwesomeIcon icon={faUser} />
                    </React.Fragment>
                )
            }}
            right={{
                link: 'https://twitter.com/progfay',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </React.Fragment>
                )
            }}
            >
            <h1>Content</h1>
            <p>Hi, here is contact page.</p>
        </Content>
    </React.Fragment>
);