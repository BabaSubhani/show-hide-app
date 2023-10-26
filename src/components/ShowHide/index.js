// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: true, last: true}

  changeFirstState = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  changeSecondState = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  firstNameContainer = () => {
    const {first} = this.state
    if (first) {
      return (
        <div className="first-name-card">
          <p className="name-heading">Joe</p>
        </div>
      )
    }
    return null
  }

  lastNameContainer = () => {
    const {last} = this.state
    if (last) {
      return (
        <div className="first-name-card">
          <p className="name-heading">Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="show-hide-bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-btn-container">
          <div className="btn-container-1">
            <button
              type="button"
              className="btn-ele"
              onClick={this.changeFirstState}
            >
              Show/Hide Firstname
            </button>
            {this.firstNameContainer()}
          </div>
          <div className="btn-container-2">
            <button
              type="button"
              className="btn-ele"
              onClick={this.changeSecondState}
            >
              Show/Hide Lastname
            </button>
            {this.lastNameContainer()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
