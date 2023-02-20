import React from 'react'
import { useSpring, animated } from 'react-spring';
import './Home.css';

function Home() {
  const [props, set] = useSpring(() => ({ opacity: 1 }));
  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome to Smart-Shelves App</h1>
      <div className="buttons-container">
        <button className="stylish-button">For Customers</button>
        <button className="stylish-button">For Businesses</button>
      </div>
      <animated.div
        style={props}
        onClick={() => set({ opacity: 0 })}
      >
        Click me!
      </animated.div>
      <div className="footer">
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>
        <div className="copyright">
          <p>&copy; All rights reserved</p>
          <img src="logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Home;