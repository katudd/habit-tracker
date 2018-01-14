import React from "react"

export default class ChooseIcon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectIcon: ""
    }
  }

  symbol = event => {
    this.setState({
      selectIcon: event.target.value
    }, () => {
      this.props.setIcon(this.state.selectIcon)
    })
  }

  render() {
    return (
      <label className="radiolabel">
        <input className="radioinput" type="radio" name="icon" onChange={this.symbol} value={this.props.habitIcon} />
        <img className="habiticon" src={this.props.habitIcon} alt="" />
      </label>
    )
  }
}
