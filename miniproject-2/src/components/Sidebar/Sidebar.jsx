import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Add product</a>
          </li>
          <li>
            <Link to={'/about-us'}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar