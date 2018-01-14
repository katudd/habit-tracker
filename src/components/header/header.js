import React from "react"
import { Link } from "react-router-dom"
import calendaricon from "assets/calendar.png"
import "./header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <Link to="/"><div className="logo">Habit tracker</div></Link>
        <Link to="/calendar"><img className="calendaricon" src={calendaricon} alt="Calendar Link" /></Link>
      </div>
    )
  }
}
