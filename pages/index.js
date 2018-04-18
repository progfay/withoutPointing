import Head from 'next/head';

export default class extends React.Component {
  componentDidMount() {
    window.location = ('googlechrome://withoutpointing.now.sh/about');
  }

  render = () => ( <div /> )
}