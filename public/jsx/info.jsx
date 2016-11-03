import React from 'react'
import ReactDOM from 'react-dom'

class Info extends React.Component {
  render()  {
    return <h1>This is where the info goes</h1>
  }
}

ReactDOM.render(
  <Info/>,
  document.getElementById('info')
)
