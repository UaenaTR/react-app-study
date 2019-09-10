import React, { Component } from 'react'

class Hello extends Component {
 constructor(props){
  super(props);
  this.state = {
    msg: "Hello Msg",
    Component: 'Hello',
    count: 0,
    type: 'pink',
    iptValue: ''
  }
  this.change = this.change.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleIptChange = this.handleIptChange.bind(this)
 }
//  componentDidMount() {
//     console.log(this)
//  }
 componentDidUpdate(){
   console.log(this.state.iptValue)
 } 
 change(e){
   e.persist()
   this.setState((state,props) => ({
    count: state.count+1,
    Component: props.user + state.count
   }))
   console.log(e)
 }
 handleChange(e){
  e.persist()
  this.setState((state, props) => {
    return {
      type: e.target.value
    }
  })
 }
 handleIptChange(e){
   e.persist()
      this.setState((state, props) => {
      return {
        iptValue: e.target.value
      }
    })
 }
 handleSubmit(e){
   console.log(this.state)
   e.preventDefault()
 }
 render(){
  const arr = [1,2,3,4,5]
  const list = arr.map(item => <div key={item}>{item}</div>)
  return (
    <div className="hello">
      {list}
      <div className="state">{this.state.msg}--------{this.state.Component}--------{this.state.count}</div>
      <span className="props" onClick={this.change}>{this.props.user}</span>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.iptValue} onChange={this.handleIptChange}/>
        <select value={this.state.type} onChange={this.handleChange}>
          <option value="white">白色</option>
          <option value="yellow">黄色</option>
          <option value="pink">粉色</option>
        </select>
        <input type="submit"/>
      </form>
    </div>   
  )
 }
}

export default Hello