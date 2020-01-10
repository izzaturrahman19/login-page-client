import React from "react"
import axios from "axios"

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()

    const post = {
      username: this.state.username,
      password: this.state.password
    }

    axios
      .post(`http://192.168.100.4:7070/login`, {
        username: post.username,
        password: post.password
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Username :
          <input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
          />
        </label>
        <label>
          Password :
          <input
            type="text"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    )
  }
}
