import React from 'react';
import './App.css'

// state component
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      err: "",
      input: "/* add your jsx here */",
      output: ""
    }
  }

  update(event)
  {
    let code = event.target.value;
    try {
        this.setState({
          output: window.Babel
            .transform(code, {presets: ['es2015', 'react']})
            .code,
          err: ''
        })
    } catch (e) {
      this.setState({
        err: e.message
      })
    }
  }

  render()
  {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.update.bind(this)}
          defaultValue={this.state.input}/>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    )
  }
}

export default App
