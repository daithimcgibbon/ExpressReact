import React from 'react'
import ReactDOM from 'react-dom'

var test = 'for the last time'

class Hello extends React.Component {
  render()  {
    return <h1>Hello {test} </h1>
  }
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('hello')
)
