import React from 'react'
import ReactDOM from 'react-dom'

class Page2 extends React.Component {
  render()  {
    return <h2>this is page 2</h2>
  }
}

ReactDOM.render(
  <Page2/>,
  document.getElementById('page2Message')
)
