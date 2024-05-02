import './Sidebar.css'
<<<<<<< HEAD
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
=======

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <a href="#">Students</a>
                    </li>
                    <li>
                        <a href="#">Add student</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
>>>>>>> 10f1c76d4c87c59a0a60c624f088d1d75febb344
}

export default Sidebar