import React from 'react'
import ReactDOM from 'react-dom'

 var message = 'please do not come back'

class World extends React.Component {
  render()  {
    return <h1>World { message } </h1>
  }
}

ReactDOM.render(
  <World/>,
  document.getElementById('world')
)
