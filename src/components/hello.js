import React, { Component } from 'react'

class Hello extends Component {
 constructor(props){
  super(props);
  this.state = {
    msg: "Hello Msg",
    Component: 'Hello',
    count: 0
  }
  this.change = this.change.bind(this)
 }
//  componentDidMount() {
//     console.log(this)
//  }
 change(){
   this.setState((state,props) => ({
    count: state.count+1,
    Component: props.user + state.count
   }))
 }
 render(){
  return (
    <div className="hello">
      <div className="state">{this.state.msg}--------{this.state.Component}--------{this.state.count}</div>
      <span className="props" onClick={this.change}>{this.props.user}</span>
    </div>   
  )
 }
}

export default Hello