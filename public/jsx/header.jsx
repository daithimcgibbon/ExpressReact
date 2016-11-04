import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  render()  {
    return (
      <div>
        <h1>Allstate</h1>
        <h8>where you're in good hands</h8>
      </div>
    )
  }
}

ReactDOM.render(
  <Header/>,
  document.getElementById('header')
)
