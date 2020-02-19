import React from 'react'
import SignIn from './SignIn'
const Home = (props) => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Home</h4>
        <p className="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
        <SignIn {...props} />  {/* Earlier this was not working because of not passing props to the SigIn component  */}
      </div>
    </div>
  )
}

export default Home