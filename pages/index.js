import Head from 'next/head';

export default class extends React.Component {
  componentDidMount() {
    window.location = ('googlechrome://withoutpointing.now.sh/about');
  }

  render = () => (
  <div>
    <h2>Please use Google Chrome app on your smartphone if A new tab could not be opened.</h2>
  </div>
)
}