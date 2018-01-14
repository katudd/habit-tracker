import React from "react"
import { Link } from "react-router-dom"
import "./item.css"

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    let done = false
    if (this.props.done === true) {
      done = true
    }
    console.log("status på checken", done)
    this.state = {
      done: done
    }
  }

  handleCheck = event => {
    console.log("JAG CHECKADE")
    this.setState({
      done: !this.state.done
    }, () => {
      this.props.checkItem(this.props.id, this.state.done)
    })
  }

  handleRemoveClick = () => {
    this.props.removeItem(this.props.id)
  }

  render() {
    return (

      <div>
        {this.props.value === "+" &&
        <Link to={`/form/${this.props.id}`}>
          <div className="item-circle">
            <div className="item-plus">
              +
            </div>
          </div>
        </Link>}

        {this.props.value !== "+" &&
        <div className="item-circle-icon">
          <img className="symbol-circle" src={this.props.symbol} alt="" />
          <label className="container">
            <div className="checkmark-above" />
            <input
              className="done-circle-input"
              type="checkbox"
              value={this.props.id}
              checked={this.state.done}
              onChange={this.handleCheck} />
            <span className="checkmark"/>
          </label>
          <button className="remove" onClick={this.handleRemoveClick}><span className="remove-icon">-</span></button>
          <div className="item-title">{this.props.value}</div>
        </div>}

      </div>
    )
  }
}
