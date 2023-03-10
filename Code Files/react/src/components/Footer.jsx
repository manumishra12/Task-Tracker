import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; Manu Mishra</p>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer
