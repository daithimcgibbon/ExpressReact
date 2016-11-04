import React from 'react'
import ReactDOM from 'react-dom'

class LoginForm extends React.Component {

  render() {
    return (
      <div>
        <form method="post" action="/authenticate">
        <input
          name="username"
          type="text"
          placeholder="username"
        />
        <br/>
        <input
          name="password"
          type="password"
          placeholder="password"
        />
        <br/>
        <button>
          Submit
        </button>
        </form>
      </div>
    )
  }

}

ReactDOM.render(
  <LoginForm />,
  document.getElementById('loginForm')
);
