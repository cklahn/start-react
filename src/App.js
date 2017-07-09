import React from 'react';
import PropTypes from 'prop-types';

// state component
class App extends React.Component {
  render() {
    let txt = this.props.txt;

    return (
      <div>
          <h1>{this.props.txt}</h1>
          <bold>{txt}</bold>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "This is the default text"
}


// stateless function component
// const App = () => <h1>stateless function component</h1>

export default App
