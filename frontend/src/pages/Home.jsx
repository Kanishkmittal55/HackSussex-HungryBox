import React from 'react'
import { useSpring, animated } from 'react-spring';



function Home() {
  const [props, set] = useSpring(() => ({ opacity: 1 }));
  return (
    <div>
      <h1>Home</h1>
      <animated.div
      style={props}
      onClick={() => set({ opacity: 0 })}
    >
      Click me!
    </animated.div>
    </div>
  )
}

export default Home