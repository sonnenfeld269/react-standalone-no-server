import React from 'react';
import ReactDOM from 'react-dom';

import CustomComponent from './src/SingleActivityCard';

class App extends React.Component {
  render() {
    return <CustomComponent data={this.props.name} />;
  }
}

const root = document.getElementById('app');
ReactDOM.render(<App {...(root.dataset)} />, root);
