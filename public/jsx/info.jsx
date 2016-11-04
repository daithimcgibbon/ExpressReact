import React from 'react'
import ReactDOM from 'react-dom'

class Info extends React.Component {
  render()  {
    return <p>This is where the info goes</p>
  }
}

ReactDOM.render(
  <Info/>,
  document.getElementById('info')
)
