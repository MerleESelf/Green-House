import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, Image} from 'react-bootstrap'





const Nav = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Green House</h1>
    <Navbar  bg="light" variant="light" expand="sm" >
      {isLoggedIn ? (
        <div>
          <Image src="https://www.pngitem.com/pimgs/m/178-1787978_plant-black-and-white-simple-hd-png-download.png" style={{ height: `70px`, width: `70px` }}/>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/plants">Explore Plants</Link>
          <Link to="/rooms">Explore Rooms</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </Navbar>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Nav)
