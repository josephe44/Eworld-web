import React, { Component} from "react";
import { Link } from "react-router-dom"
import './custom/style.css'

class Navbar extends Component {
  state = {clicked: false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  closeMobileMenu = () => {
    this.setState({clicked: false})
  }

  render() {
    return (
       <div>
          <nav className="navbar bg-primary">
            <p className='logo'>EWORLD</p>
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            <ul className={this.state.clicked ? 'navbar ul active' : 'navbar'}>
              <li onClick={this.closeMobileMenu}>
                <Link to='/'>Home</Link>
              </li>
              <li onClick={this.closeMobileMenu}>
                <Link to='/project'>Project</Link>
              </li>
              <li onClick={this.closeMobileMenu}>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
};

export default Navbar;



// <div>
      //   <nav className="navbar bg-primary">
      //     <h1 className='logo'>Eworld</h1>
      //     <div className="menu-icon" onClick={this.handleClick}>
      //       <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
      //     </div>
      //     <ul className={this.state.clicked ? 'navbar ul active' : 'navbar'}>
      //       <li onClick={this.closeMobileMenu}>
      //         <Link to="/">
      //           Home
      //         </Link>
      //       </li>
      //       <li onClick={this.closeMobileMenu}>
      //         <Link to="/project">Project</Link>
      //       </li>
      //       <li onClick={this.closeMobileMenu}>
      //         <Link to="/contact">Contact</Link>
      //       </li>
      //     </ul>
      //   </nav>
      // </div>