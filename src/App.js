import React from 'react';
import PropTypes from 'prop-types';

// state component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt1: 'this is the state txt',
      cat: 0
    }
  }

  update( event ) {
    this.setState({txt1: event.target.value})
  }

  render() {
    let txt = this.props.txt;

    return (
      <div>
          <h1>{this.props.txt}</h1>
          <bold>{txt}</bold>
          <br /><br />
          <input type="text" onChange={this.update.bind(this)} />
          <h1>{this.state.txt1} - {this.state.cat}</h1>
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
