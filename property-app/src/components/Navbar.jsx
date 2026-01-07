import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar
    <nav class="navbar">
      <div class="nav-brand">
        <div class="logo-icon"><i class="fa-solid fa-house"></i></div>
        <div class="logo-text">
          PropertyGen <span class="highlight">MVC</span>
          <small>React Frontend Client</small>
        </div>
      </div>
      <ul class="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#" class="active">My Listings</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar