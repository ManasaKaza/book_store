import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  const activepagestyle = ({ isActive }) => {
    return {
      color: isActive ? 'black' : 'grey',
      fontSize: isActive ? '25px' : '18px',
      paddingLeft: '50px',
      fontFamily: "Times New Roman"
    }
  }
  return (
    <div style={{ padding: '40px 100px 0px 100px  ' }}>
      <div className="ui text menu">
        <NavLink to='/' style={activepagestyle} className="active item">
          Home</NavLink>
        <NavLink to='about' style={activepagestyle} className="item">
          About
        </NavLink>
        <NavLink to='contactUs' style={activepagestyle} className="item">
          ContactUs
        </NavLink>
        <input type="text" style={{ borderRadius: '10px' }} placeholder="   bookname or by author"></input>
        <NavLink to='register' style={activepagestyle} className="item">
          Register
        </NavLink>
      </div>
      <hr style={{ marginTop: '30px' }}></hr>
    </div>
  )
}
