import React from 'react';
import './App.css'

// state component
class App extends React.Component
{
  render(){
    return (
      <Parent>
        <div className="childA"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    // console.log(this.props.children)
    let items = React.Children
    //  .map(this.props.children, child => child);
    //  .toArray(this.props.children);
    //  .forEach(this.props.children, child => console.log(child.props.className));
      .only(this.props.children);
    console.log(items);
    return null
  }
}


export default App
