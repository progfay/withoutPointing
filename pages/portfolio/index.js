import HeadWithoutScroll from '../../components/headWithoutScroll';
import Content from '../../components/content';

import FontAwesomeIcon    from '@fortawesome/react-fontawesome'
import faAngleDoubleUp    from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faAngleDoubleDown  from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faAngleDoubleLeft  from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'
import faInfoCircle       from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import faUser             from '@fortawesome/fontawesome-free-solid/faUser';

export default () => (
    <React.Fragment>
        <HeadWithoutScroll title="about"/>
        <Content
            up={{
                link: '/about',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleUp} />
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </React.Fragment>
                )
            }}
            down={{
                link: '/portfolio',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                        <FontAwesomeIcon icon={faUser} />
                    </React.Fragment>
                )
            }}
            left={{
                link: '/portfolio/4',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} style={{ fontSize: '45px' }} />
                    </React.Fragment>
                )
            }}
            right={{
                link: '/portfolio/1',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleRight} style={{ fontSize: '45px' }} />
                    </React.Fragment>
                )
            }}
            >
            <h1>Portfolio</h1>
            <p> {"It's top page of portfolio."} </p>
        </Content>
    </React.Fragment>
);