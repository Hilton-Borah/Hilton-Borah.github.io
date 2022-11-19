import React from 'react'

const dummy = () => {
  return (
    <div>
       <nav>
      <div class="logo">Brand</div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
    <div class="content">
      <div>Responsive Navigation Menu Bar Design</div>
      <div>using only HTML & CSS</div>
    </div>

    </div>
  )
}

export default dummy
