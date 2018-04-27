# withoutPointing

Elimination of pointing gesture from touch display

## Getting Started

Please open this URL on your smartphone : [https://withoutpointing.now.sh](https://withoutpointing.now.sh)

### Move another page

- moving page by panning up / down / left / right
- font awesome icon represents a hint of adjacent pages

### Add new page

1. touch new `.js` file for `/pages`
2. copy above code and paste to touched file
3. change the part surrounded by `${ }`

```javascript
import Page from '../components/page';

import { pageInfo as topPage }    from './${top page path}';
import { pageInfo as bottomPage } from './${bottom page path}';
import { pageInfo as leftPage }   from './${left page path}';
import { pageInfo as rightPage }  from './${right page path}';

import icon from '@fortawesome/fontawesome-free-solid/${icon of this page}';

const pageInfo = {
        title: '${page title}',
        icon: icon,
        bgColor: '${background color}',
        link: '/${file name}',
        children: (
            <React.Fragment>
                {/* center position content */}
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
```

## Authors

* **progfay** - [progfay](https://github.com/progfay)
