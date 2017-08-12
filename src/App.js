import React from 'react';
import ReactDOM from 'react-dom';

// state component
class App extends React.Component
{
  constructor() {
    super();
    this.state = {a: ''}
  }

  update() {
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      c: ReactDOM.findDOMNode(this.c).value,
      d: this.d.refs.input.value
    })
  }

  render() {
    return (
      <div>
        <input
          ref={node => this.a = node}
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
        <hr />
        <Input
          ref={component => this.c = component}
          update={this.update.bind(this)}
        /> {this.state.c}
        <hr />
        <Input2
          ref={component => this.d = component}
          update={this.update.bind(this)}
        /> {this.state.d}
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
        <input type="text" onChange={this.props.update} />
    )
  }
}

class Input2 extends React.Component {
  render() {
    return (
      <div>
        <input ref="input" type="text" onChange={this.props.update} />
      </div>
    )
  }
}

export default App
