import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, Image} from 'react-bootstrap'





const Nav = ({handleClick, isLoggedIn}) => (
  <div>
  
    <Navbar  bg="dark" variant="light" expand="sm" >
      {isLoggedIn ? (
        <div>
          <Image src="https://i.etsystatic.com/21577189/r/il/7b6df9/2419950432/il_570xN.2419950432_70d3.jpg" style={{ height: `90px`, width: `90px` }}/>
          {/* The navbar will show these links after you log in */}
          <span>Green House</span>
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
