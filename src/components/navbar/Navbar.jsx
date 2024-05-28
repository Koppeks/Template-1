import { useState } from "react"
import "./navbar.css"

function Navbar() {

  const [openNav, setOpenNav] = useState(false)

  return(
    <div className={`NavbarContainer ${openNav ? "active" : ""}`}>
      <h4 onClick={()=> setOpenNav(!openNav)}>Logo</h4>
      <nav>
        <ul>
          <li>Home</li>
          <li>Highlights</li>
          <li>Your earns</li>
          <li>Keep track</li>
          <li>Convert clients</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar