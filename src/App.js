import React from 'react';

// state component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

  update( event ) {
    this.setState({txt: event.target.value})
  }

  render() {
    return (
      <div>
          <h1>{this.state.txt}</h1>
          <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />

export default App
