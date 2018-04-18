import Head from 'next/head';

export default ({ title }) => (
  <React.Fragment>
    <Head>
        <title>{title}</title>
        <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
        <meta name="viewport" content="width=device-width" />
    </Head>
    <style jsx global>{`
        html, body {
            width: 100%;
            height: 100%;
        }

        body {
            position: fixed;
            top: 0;
            left: 0;
            overflow: hidden;
        }

        * {
            padding: 0;
            margin: 0;
        }
    `}</style>
  </React.Fragment>
);

// let lastTouchEnd = 0;

// export const startZoomLock = (target) => {
//   target.addEventListener(
//     'touchmove',
//     (event) => { event.preventDefault() },
//     false
//   );

//   target.addEventListener(
//     'touchstart',
//     (event) => { if (event.touches.length > 1) event.preventDefault() },
//     false
//   );

//   target.addEventListener(
//     'touchend',
//     event => { if (- lastTouchEnd + (lastTouchEnd = new Date().getTime()) <= 500) event.preventDefault() },
//     false
//   );
// };